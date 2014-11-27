/**
 * Created by chizhenming on 2014/11/25.
 */
<!--头部开始-->

var CommonTree = CommonTree || {}
var tree = {
    "采集器": {name: "采集器", href: ""},
    "阶梯计价水表": [
        {name: "远传水表读数表", href: ""},
        {name: "水表读数表", href: ""},
        {name: "水表单价表", href: ""}
    ],
    "仪表": {name: "仪表信息", href: ""}
}


(function (CommonTree) {
    var ASIDEStr = '<aside><div id="sidebar" class="nav-collapse ">';
    var ASIDEEnd = "</div></aside>";
    var centralUl = '<ul class="sidebar-menu"></ul>';
    var centralUlLi = '';
    var _this;
    var head = function (options) {
        _this = this;
        this.defaultSettings = {
        }
        this.options = $.extend(this.defaultSettings, options);
    }
    head.prototype.ready = function (count) {


        for (var key in tree) {
            if (typeof tree[key] == "object") {
                for (var i = 0; i < tree[key].length; i++) {
                    //TODO
                    console.log("进入当前子结点");
                    this.ready(i);

                }
            } else {
                this.ready(i);
                //TODO
                centralUlLi = '<li class=' + "active" + '> <a class="" href="index.html"></li>';
            }
        }
    }
    CommonTree=head;
})(CommonTree)


//    <!-- sidebar menu start-->
//    <ul class="sidebar-menu">
//        <li class="active">
//            <a class="" href="index.html">
//                <i class="icon-dashboard"></i>
//                <span>Dashboard</span>
//            </a>
//        </li>
//        <li class="sub-menu">
//            <a href="javascript:;" class="">
//                <i class="icon-book"></i>
//                <span>UI Elements</span>
//                <span class="arrow"></span>
//            </a>
//            <ul class="sub">
//                <li><a class="" href="general.html">General</a></li>
//                <li><a class="" href="buttons.html">Buttons</a></li>
//                <li><a class="" href="widget.html">Widget</a></li>
//                <li><a class="" href="slider.html">Slider</a></li>
//                <li><a class="" href="font_awesome.html">Font Awesome</a></li>
//            </ul>
//        </li>
//        <li class="sub-menu">
//            <a href="javascript:;" class="">
//                <i class="icon-cogs"></i>
//                <span>Components</span>
//                <span class="arrow"></span>
//            </a>
//            <ul class="sub">
//                <li><a class="" href="grids.html">Grids</a></li>
//                <li><a class="" href="calendar.html">Calendar</a></li>
//                <li><a class="" href="charts.html">Charts</a></li>
//            </ul>
//        </li>
//        <li class="sub-menu">
//            <a href="javascript:;" class="">
//                <i class="icon-tasks"></i>
//                <span>Form Stuff</span>
//                <span class="arrow"></span>
//            </a>
//            <ul class="sub">
//                <li><a class="" href="form_component.html">Form Components</a></li>
//                <li><a class="" href="form_wizard.html">Form Wizard</a></li>
//                <li><a class="" href="form_validation.html">Form Validation</a></li>
//            </ul>
//        </li>
//        <li class="sub-menu">
//            <a href="javascript:;" class="">
//                <i class="icon-th"></i>
//                <span>Data Tables</span>
//                <span class="arrow"></span>
//            </a>
//            <ul class="sub">
//                <li><a class="" href="basic_table.html">Basic Table</a></li>
//                <li><a class="" href="dynamic_table.html">Dynamic Table</a></li>
//            </ul>
//        </li>
//        <li>
//            <a class="" href="inbox.html">
//                <i class="icon-envelope"></i>
//                <span>Mail </span>
//                <span class="label label-danger pull-right mail-info">2</span>
//            </a>
//        </li>
//        <li class="sub-menu">
//            <a href="javascript:;" class="">
//                <i class="icon-glass"></i>
//                <span>Extra</span>
//                <span class="arrow"></span>
//            </a>
//            <ul class="sub">
//                <li><a class="" href="blank.html">Blank Page</a></li>
//                <li><a class="" href="profile.html">Profile</a></li>
//                <li><a class="" href="invoice.html">Invoice</a></li>
//                <li><a class="" href="404.html">404 Error</a></li>
//                <li><a class="" href="500.html">500 Error</a></li>
//            </ul>
//        </li>
//        <li>
//            <a class="" href="login.html">
//                <i class="icon-user"></i>
//                <span>Login Page</span>
//            </a>
//        </li>
//    </ul>
