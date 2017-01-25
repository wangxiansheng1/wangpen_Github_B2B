define('lehu.h5.page.index', [
    'can',
    'zepto',
    'fastclick',
    'lehu.util',
    'lehu.h5.framework.comm',
    'lehu.h5.business.config',
    'lehu.env.switcher',
    'lehu.hybrid',

    'lehu.h5.header.footer',
    'lehu.h5.header.download',

    'lehu.h5.component.index'
],
    function(can, $, Fastclick, util, LHFrameworkComm, LHConfig, LHSwitcher, LHHybrid,
             LHFooter, LHDownload,
             LHIndex) {
        'use strict';

        Fastclick.attach(document.body);

        var Index = can.Control.extend({

            /**
             * [init ��ʼ��]
             * @param  {[type]} element Ԫ��
             * @param  {[type]} options ѡ��
             */
            init: function(element, options) {
                var index = new LHIndex("#index");
                new LHFooter();

              /*  var param = can.deparam(window.location.search.substr(1));
                if (!param.version) {
                    new LHDownload(null, {
                        "position": "bottom"
                    });
                }*/
            }
        });

        new Index('#index');
    });
