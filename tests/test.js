'use strict';

import { me } from '../src/index.js';

QUnit.test("Insult me", function (assert) {
    assert.ok(me === String, "Passed!");
});