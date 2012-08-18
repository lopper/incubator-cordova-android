//
//  FunPokes.TabBar.js
//
//  Created by David Hu on 8/4/11.
//  Copyright 2011 FunPokes, Inc. All rights reserved.
//

if (!PhoneGap.hasResource("tabbar")) {
    PhoneGap.addResource("tabbar");

var FunPokes = FunPokes || {};

/**
 * TabBar constructor.
 * @constructor
 */
FunPokes.TabBar = function() { };

/** @define {string} Plugin's full name. */
FunPokes.TabBar.FULL_NAME = "FPTabBar";

/**
 * Enum for default system items.
 * @enum {number}
 */
FunPokes.TabBar.SystemItem = {
    MORE:        0,
    FAVORITES:   1,
    FEATURED:    2,
    TOP_RATED:   3,
    RECENTS:     4,
    CONTACTS:    5,
    HISTORY:     6,
    BOOKMARKS:   7,
    SEARCH:      8,
    DOWNLOADS:   9,
    MOST_RECENT: 10,
    MOST_VIEWED: 11
};

// Private helper method to build the proxy handlers.
FunPokes.TabBar._createFunction = function(method) {
    return function(args, successCB, errorCB) {
        if (typeof args === "function") {
            errorCB = successCB;
            successCB = args;
            args = null;
        }
        PhoneGap.exec(successCB, errorCB, FunPokes.TabBar.FULL_NAME, method, [args || {}]);
    };
};

/**
 * Returns an array of tab bar items in the tab bar.
 * @param successCB {function} success callback
 * @param errorCB {function=} error callback (optional)
 * @returns {Array} an array of tab bar items in the tab bar
 */
FunPokes.TabBar.prototype.getItems = FunPokes.TabBar._createFunction("getItems");

/**
 * Sets the tab bar items in the tab bar.
 * @param args.items {Array.<Object>} items to display in the tab bar.
 * @param args.animated {boolean=} determines whether or not to animate this action (optional)
 * @param successCB {function=} success callback (optional)
 * @param errorCB {function=} error callback (optional)
 */
FunPokes.TabBar.prototype.setItems = FunPokes.TabBar._createFunction("setItems");

/**
 * Gets the count of tab bar items in the tab bar.
 * @param successCB {function} success callback
 * @param errorCB {function=} error callback (optional)
 * @returns {number} count of tab bar items in the tab bar
 */
FunPokes.TabBar.prototype.count = FunPokes.TabBar._createFunction("count");

/**
 * Shows the tab bar.
 * @param successCB {function=} success callback (optional)
 * @param errorCB {function=} error callback (optional)
 */
FunPokes.TabBar.prototype.show = FunPokes.TabBar._createFunction("show");

/**
 * Hides the tab bar.
 * @param successCB {function=} success callback (optional)
 * @param errorCB {function=} error callback (optional)
 */
FunPokes.TabBar.prototype.hide = FunPokes.TabBar._createFunction("hide");

/**
 * Get the tab bar item at the specified index.
 * @param args.index {number} the index of the tab bar item to get
 * @param successCB {function} success callback
 * @param errorCB {function=} error callback (optional)
 * @returns {Object} object representing the specified tab bar item
 */
FunPokes.TabBar.prototype.get = FunPokes.TabBar._createFunction("get");

/**
 * Replaces the tab bar item with a different one at the specified index.
 * @param args.index {number} index of the tab bar item to replace.
 * @param args.item {Object} tab bar item that will be replacing the original tab bar item
 * @param args.animated {boolean=} determines whether or not to animate this action (optional)
 * @param successCB {function=} success callback (optional)
 * @param errorCB {function=} error callback (optional)
 */
FunPokes.TabBar.prototype.replace = FunPokes.TabBar._createFunction("replace");

/**
 * Adds a tab bar item to the tab bar.
 * @param args.item {Object} tab bar item that will be add to the tab bar
 * @param args.animated {boolean=} determines whether or not to animate this action (optional)
 * @param successCB {function=} success callback (optional)
 * @param errorCB {function=} error callback (optional)
 */
FunPokes.TabBar.prototype.add = FunPokes.TabBar._createFunction("add");

/**
 * Inserts a tab bar item to the tab bar.
 * @param args.index {number} index position to insert the tab bar item
 * @param args.item {Object} tab bar item that will be inserted into to the tab bar
 * @param args.animated {boolean=} determines whether or not to animate this action (optional)
 * @param successCB {function=} success callback (optional)
 * @param errorCB {function=} error callback (optional)
 */
FunPokes.TabBar.prototype.insert = FunPokes.TabBar._createFunction("insert");

/**
 * Updates the tab bar item's fields at the specified index with the change set object.
 * @param args.index {number} index of the tab bar item to update
 * @param args.item {Object} object containing fields that will be used to modify the specified tab bar item
 * @param args.animated {boolean=} determines whether or not to animate this action (optional)
 * @param successCB {function=} success callback (optional)
 * @param errorCB {function=} error callback (optional)
 */
FunPokes.TabBar.prototype.update = FunPokes.TabBar._createFunction("update");

/**
 * Removes the tab bar item at the specified index.
 * @param args.index {number} index of the tab bar item to remove
 * @param args.animated {boolean=} determines whether or not to animate this action (optional)
 * @param successCB {function=} success callback (optional)
 * @param errorCB {function=} error callback (optional)
 */
FunPokes.TabBar.prototype.remove = FunPokes.TabBar._createFunction("remove");

/**
 * Selects (highlights) the tab bar item at the specified index.
 * @param args.index {number} index of the tab bar item to select (highlight)
 * @param successCB {function=} success callback (optional)
 * @param errorCB {function=} error callback (optional)
 */
FunPokes.TabBar.prototype.select = FunPokes.TabBar._createFunction("select");

/**
 * Creates an instance and add it to the windows.plugins namespace.
 */
FunPokes.TabBar.install = function() {
    window.plugins = window.plugins || {};
    window.plugins.tabbar = new window.FunPokes.TabBar();
};

// Install the plugin.
PhoneGap.addConstructor(FunPokes.TabBar.install);

}