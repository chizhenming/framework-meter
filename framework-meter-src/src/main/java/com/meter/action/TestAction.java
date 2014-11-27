package com.meter.action;


import com.meter.core.abs.AbstractAction;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.tango.core.annotation.Access;

/**
 * Created by chizhenming on 14-10-22.
 */
@Scope("prototype")
@Controller
@Namespace("/")
@ParentPackage("admin-default")
public class TestAction extends AbstractAction {
    private static final Log LOG = LogFactory.getLog(TestAction.class);
    @Access(login = false, privilege = false)
    @Action(value = "index", results = {@Result(name = SUCCESS, type = JSON, params = {ROOT, "actionResult.result", CONTENT_TYPE, "application/json"})})
    public String index() throws Exception {
        LOG.info("进入Action");
        System.out.println("进入action");
        return SUCCESS;
    }
}
