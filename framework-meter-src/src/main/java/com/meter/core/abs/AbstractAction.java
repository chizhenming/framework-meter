package com.meter.core.abs;

import com.meter.core.bean.ActionResult;
import com.opensymphony.xwork2.ActionSupport;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

/**
 * User: tango
 * Date: 13-5-20
 * Time: 下午3:05
 */
public abstract class AbstractAction extends ActionSupport {

    private static final Log log = LogFactory.getLog(AbstractAction.class);

    protected static final String JSON = "json";
    protected static final String ROOT = "root";
    protected static final String CONTENT_TYPE = "contentType";
    protected static final String CONTENT_TYPE_HTML = "text/html";
    protected static final String ACTION_RESULT = "actionResult";
    protected static final String ACTION_RESULT_SINGLETON_OBJECT = "actionResult.result";
    protected static final String REDIRECT_ACTION = "redirectAction";

    protected ActionResult actionResult;

    public ActionResult getActionResult() {
        return actionResult;
    }

    public void setActionResult(ActionResult actionResult) {
        this.actionResult = actionResult;
    }
}
