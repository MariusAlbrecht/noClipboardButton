/*
 * basically a clone of the HideActivities extension created by Shay Elkin <shay@shayel.org> and updated by zeten30@gmail.com 
 * <https://github.com/zeten30/HideActivities>
 */

/*
 * please do not contact me in order to get any kind of (technical) support.
 * this is a purely personal project purely intended to work for _me and my setup_
 * I published it in the case someone else might get some use out of it despite that fact
 */

const Main = imports.ui.main;
let monitorsChangedEvent = null;

function hideIndicator() {
    let indicator = Main.panel.statusArea['clipboardIndicator'];
    if(indicator != null) {
        indicator.hide();
    }
}

function enable() {
    monitorsChangedEvent = Main.layoutManager.connect('monitors-changed', hideIndicator);
    hideIndicator();
}

function disable() {
    Main.layoutManager.disconnect(monitorsChangedEvent);
    let indicator = Main.panel.statusArea['clipboardIndicator'];
    if(indicator != null) {
        indicator.show();
    }
}
