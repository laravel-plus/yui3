var SCALE = "scale",
    ROTATION = "rotation";

Y.DOMEventFacade.prototype._touch = function(e, currentTarget, wrapper) {
    var i,l;

    Y.log("Calling _touch() with e = " + e);

    if (e.touches) {
        this.touches = [];

        for (i = 0, l = e.touches.length; i < l; ++i) {
            this.touches[i] = new Y.DOMEventFacade(e.touches[i], currentTarget, wrapper);
        }

        Y.log("Found e.touches. Replicated on facade");
    }

    if (e.targetTouches) {
        this.targetTouches = [];

        for (i = 0, l = e.targetTouches.length; i < l; ++i) {
            // TODO: Should we re-use Touch instances from the e.touches loop?
            // Are we breaking things if instance equality is busted? (e.touches[n] !== e.targetTouches[m])
            this.targetTouches[i] = new Y.DOMEventFacade(e.targetTouches[i], currentTarget, wrapper);
        }

        Y.log("Found e.tagetTouches. Replicated on facade");
    }

    if (e.currentTouches) {
        this.currentTouches = [];

        for (i = 0, l = e.currentTouches.length; i < l; ++i) {
            this.currentTouches[i] = new Y.DOMEventFacade(e.currentTouches[i], currentTarget, wrapper);
        }

        Y.log("Found e.currentTouches. Replicated on facade");        
    }

    if (SCALE in e) {
        this.scale = e.scale;
    }

    if (ROTATION in e) {
        this.rotation = e.rotation;
    }
};

if (Y.Node.DOM_EVENTS) {
    Y.mix(Y.Node.DOM_EVENTS, {
        touchstart:1,
        touchmove:1,
        touchend:1,
        touchcancel:1,
        gesturestart:1,
        gesturechange:1,
        gestureend:1
    });
}
