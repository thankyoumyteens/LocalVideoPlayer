package com.walter2743.utils;

import ohos.hiviewdfx.HiLog;
import ohos.hiviewdfx.HiLogLabel;

public class LogUtil {
    private static final HiLogLabel LABEL_LOG = new HiLogLabel(3, 0xD001100, "Demo");

    public static void log(String msg, Object... args) {
        HiLog.info(LABEL_LOG, "walter-log " + msg, args);
    }
}
