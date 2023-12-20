/*
 * basically a clone of the HideActivities extension created by Shay Elkin <shay@shayel.org> and Milan Zink <zeten30@gmail.com> 
 * <https://github.com/zeten30/HideActivities>
 */

/*
 * please do not contact me in order to get any kind of (technical) support.
 * this is a purely personal project purely intended to work for _me and my setup_
 * I published it in the case someone else might get some use out of it despite that fact
 */

import * as Main from "resource:///org/gnome/shell/ui/main.js";
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';

await new Promise(r => setTimeout(r, 10 * 1000));

export default class noClipboardButtonExtension extends Extension {
    indicator

    set_indicator() {
        this.indicator = Main.panel.statusArea['clipboardIndicator'];
    }

    enable() {
        this.set_indicator()
        this.do_sleep(10)
        if (this.indicator != null) {
            this.indicator.hide();
        }
    }

    disable() {
        this.set_indicator()
        if (this.indicator != null) {
            this.indicator.show();
        }
    }
}