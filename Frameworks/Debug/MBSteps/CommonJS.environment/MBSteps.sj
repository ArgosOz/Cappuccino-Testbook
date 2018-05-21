@STATIC;1.0;p;9;MBSteps.jt;78;@STATIC;1.0;i;14;MBStepsClass.jt;42;

objj_executeFile("MBStepsClass.j", YES);p;14;MBStepsClass.jt;874;@STATIC;1.0;I;21;Foundation/CPObject.jt;830;

objj_executeFile("Foundation/CPObject.j", NO);
{var the_class = objj_allocateClassPair(CPObject, "MBSteps"),
meta_class = the_class.isa;objj_registerClassPair(the_class);
class_addMethods(meta_class, [new objj_method(sel_getUid("version"), function $MBSteps__version(self, _cmd)
{
    var bundle = (CPBundle == null ? null : (CPBundle.isa.method_msgSend["bundleForClass:"] || _objj_forward)(CPBundle, (CPBundle.isa.method_dtable["bundleForClass:"], "bundleForClass:"), (self.isa.method_msgSend["class"] || _objj_forward)(self, (self.isa.method_dtable["class"], "class"))));
    return (bundle == null ? null : (bundle.isa.method_msgSend["objectForInfoDictionaryKey:"] || _objj_forward)(bundle, (bundle.isa.method_dtable["objectForInfoDictionaryKey:"], "objectForInfoDictionaryKey:"), "CPBundleVersion"));
}

,["CPString"])]);
}
p;23;PopoverViewController.jt;37682;@STATIC;1.0;I;23;Foundation/Foundation.jI;15;AppKit/AppKit.jt;37614;

objj_executeFile("Foundation/Foundation.j", NO);objj_executeFile("AppKit/AppKit.j", NO);
{var the_class = objj_allocateClassPair(CPViewController, "PopoverViewController"),
meta_class = the_class.isa;class_addIvars(the_class, [new objj_ivar("_tableView", "CPTableView"), new objj_ivar("_dummyLabel", "CPTextField"), new objj_ivar("_codeView", "CPView"), new objj_ivar("_tableCellViewForText", "CPTableCellView"), new objj_ivar("_tableDataArray", "CPMutableArray"), new objj_ivar("_codeTemplate", "CPString"), new objj_ivar("_currentMainStepNo", "int"), new objj_ivar("_rowDimensionsDictionary", "CPMutableDictionary"), new objj_ivar("_projectName", "CPString"), new objj_ivar("_baseURL", "CPString"), new objj_ivar("_subStepsDidChange", "BOOL"), new objj_ivar("_resetRowHeights", "BOOL"), new objj_ivar("_stepsBundle", "CPBundle")]);objj_registerClassPair(the_class);
class_addMethods(the_class, [new objj_method(sel_getUid("_dummyLabel"), function $PopoverViewController___dummyLabel(self, _cmd)
{
    return self._dummyLabel;
}

,["CPTextField"]), new objj_method(sel_getUid("_setDummyLabel:"), function $PopoverViewController___setDummyLabel_(self, _cmd, newValue)
{
    self._dummyLabel = newValue;
}

,["void","CPTextField"]), new objj_method(sel_getUid("baseURL"), function $PopoverViewController__baseURL(self, _cmd)
{
    return self._baseURL;
}

,["CPString"]), new objj_method(sel_getUid("setBaseURL:"), function $PopoverViewController__setBaseURL_(self, _cmd, newValue)
{
    self._baseURL = newValue;
}

,["void","CPString"]), new objj_method(sel_getUid("didSubStepsChange"), function $PopoverViewController__didSubStepsChange(self, _cmd)
{
    return self._subStepsDidChange;
}

,["BOOL"]), new objj_method(sel_getUid("setSubStepsDidChange:"), function $PopoverViewController__setSubStepsDidChange_(self, _cmd, newValue)
{
    self._subStepsDidChange = newValue;
}

,["void","BOOL"]), new objj_method(sel_getUid("stepsBundle"), function $PopoverViewController__stepsBundle(self, _cmd)
{
    return self._stepsBundle;
}

,["CPBundle"]), new objj_method(sel_getUid("setStepsBundle:"), function $PopoverViewController__setStepsBundle_(self, _cmd, newValue)
{
    self._stepsBundle = newValue;
}

,["void","CPBundle"]), new objj_method(sel_getUid("initWithCibName:bundle:"), function $PopoverViewController__initWithCibName_bundle_(self, _cmd, aCibNameOrNil, aCibBundleOrNil)
{
    self = (objj_getClass("PopoverViewController").super_class.method_dtable["initWithCibName:bundle:"] || _objj_forward)(self, "initWithCibName:bundle:", aCibNameOrNil, aCibBundleOrNil);
    var defaults = (CPUserDefaults.isa.method_msgSend["standardUserDefaults"] || _objj_forward)(CPUserDefaults, (CPUserDefaults.isa.method_dtable["standardUserDefaults"], "standardUserDefaults"));
    var rawString = (defaults == null ? null : (defaults.isa.method_msgSend["stringForKey:"] || _objj_forward)(defaults, (defaults.isa.method_dtable["stringForKey:"], "stringForKey:"), "rowDimensionsByMainStepsDictionary"));
    if (!rawString)
        self._rowDimensionsDictionary = (___r1 = (CPDictionary.isa.method_msgSend["alloc"] || _objj_forward)(CPDictionary, "alloc"), ___r1 == null ? null : (___r1.isa.method_msgSend["init"] || _objj_forward)(___r1, "init"));
    else
        self._rowDimensionsDictionary = (CPKeyedUnarchiver.isa.method_msgSend["unarchiveObjectWithData:"] || _objj_forward)(CPKeyedUnarchiver, (CPKeyedUnarchiver.isa.method_dtable["unarchiveObjectWithData:"], "unarchiveObjectWithData:"), (CPData.isa.method_msgSend["dataWithRawString:"] || _objj_forward)(CPData, (CPData.isa.method_dtable["dataWithRawString:"], "dataWithRawString:"), rawString));
    self._projectName = ((___r1 = (CPBundle.isa.method_msgSend["mainBundle"] || _objj_forward)(CPBundle, (CPBundle.isa.method_dtable["mainBundle"], "mainBundle"))), ___r1 == null ? null : (___r1.isa.method_msgSend["objectForInfoDictionaryKey:"] || _objj_forward)(___r1, "objectForInfoDictionaryKey:", "CPBundleName")).replace(/ /g, "-");
    var url = (CPURL.isa.method_msgSend["URLWithString:"] || _objj_forward)(CPURL, (CPURL.isa.method_dtable["URLWithString:"], "URLWithString:"), "../HTML-Templates/dyno/code.html");
    var request = (CPURLRequest.isa.method_msgSend["requestWithURL:"] || _objj_forward)(CPURLRequest, (CPURLRequest.isa.method_dtable["requestWithURL:"], "requestWithURL:"), url);
    var connection = ((___r1 = (CPURLConnection.isa.method_msgSend["alloc"] || _objj_forward)(CPURLConnection, (CPURLConnection.isa.method_dtable["alloc"], "alloc"))), ___r1 == null ? null : (___r1.isa.method_msgSend["initWithRequest:delegate:"] || _objj_forward)(___r1, "initWithRequest:delegate:", request, self));
    window.addEventListener("message",     function(e)
    {
        var receivedObject = JSON.parse(e.data);
        if (receivedObject.row && receivedObject.height)
        {
            var rowDimensions = ((___r1 = self._rowDimensionsDictionary), ___r1 == null ? null : (___r1.isa.method_msgSend["valueForKey:"] || _objj_forward)(___r1, (self._rowDimensionsDictionary.isa.method_dtable["valueForKey:"], "valueForKey:"), "" + self._currentMainStepNo + "_" + receivedObject.row));
            if (!(rowDimensions == null ? null : (rowDimensions.isa.method_msgSend["rowSize"] || _objj_forward)(rowDimensions, (rowDimensions.isa.method_dtable["rowSize"], "rowSize"))) || (rowDimensions == null ? null : (rowDimensions.isa.method_msgSend["rowSize"] || _objj_forward)(rowDimensions, (rowDimensions.isa.method_dtable["rowSize"], "rowSize"))).height != receivedObject.height)
            {
                (self == null ? null : (self.isa.method_msgSend["saveRowSize:andLabelSize:forSubStepRow:"] || _objj_forward)(self, (self.isa.method_dtable["saveRowSize:andLabelSize:forSubStepRow:"], self.isa.method_dtable["saveRowSize:andLabelSize:forSubStepRow:"], self.isa.method_dtable["saveRowSize:andLabelSize:forSubStepRow:"], "saveRowSize:andLabelSize:forSubStepRow:"), CGSizeMake(((___r1 = self._tableView), ___r1 == null ? null : (___r1.isa.method_msgSend["frameSize"] || _objj_forward)(___r1, (self._tableView.isa.method_dtable["frameSize"], "frameSize"))).width, receivedObject.height), nil, receivedObject.row));
                ((___r1 = self._tableView), ___r1 == null ? null : (___r1.isa.method_msgSend["noteHeightOfRowsWithIndexesChanged:"] || _objj_forward)(___r1, (self._tableView.isa.method_dtable["noteHeightOfRowsWithIndexesChanged:"], "noteHeightOfRowsWithIndexesChanged:"), (CPIndexSet.isa.method_msgSend["indexSetWithIndex:"] || _objj_forward)(CPIndexSet, (CPIndexSet.isa.method_dtable["indexSetWithIndex:"], "indexSetWithIndex:"), receivedObject.row)));
            }        }        var ___r1;
    }, false);
    return self;
    var ___r1;
}

,["id","CPString","CPBundle"]), new objj_method(sel_getUid("tableReloadDataForMainStepRow:"), function $PopoverViewController__tableReloadDataForMainStepRow_(self, _cmd, row)
{
    self._currentMainStepNo = row;
    ((___r1 = self._tableView), ___r1 == null ? null : (___r1.isa.method_msgSend["reloadData"] || _objj_forward)(___r1, (self._tableView.isa.method_dtable["reloadData"], "reloadData")));
    var ___r1;
}

,["void","CPInteger"]), new objj_method(sel_getUid("setTableDataArray:"), function $PopoverViewController__setTableDataArray_(self, _cmd, tableDataArray)
{
    self._tableDataArray = tableDataArray;
}

,["void","CPMutableArray"]), new objj_method(sel_getUid("closePopover:"), function $PopoverViewController__closePopover_(self, _cmd, sender)
{
    var notificationCenter = (CPNotificationCenter.isa.method_msgSend["defaultCenter"] || _objj_forward)(CPNotificationCenter, (CPNotificationCenter.isa.method_dtable["defaultCenter"], "defaultCenter"));
    (notificationCenter == null ? null : (notificationCenter.isa.method_msgSend["postNotificationName:object:userInfo:"] || _objj_forward)(notificationCenter, (notificationCenter.isa.method_dtable["postNotificationName:object:userInfo:"], notificationCenter.isa.method_dtable["postNotificationName:object:userInfo:"], notificationCenter.isa.method_dtable["postNotificationName:object:userInfo:"], "postNotificationName:object:userInfo:"), "PopoverTermination", self, nil));
}

,["void","id"]), new objj_method(sel_getUid("replacePlaceHolders:"), function $PopoverViewController__replacePlaceHolders_(self, _cmd, text)
{
    return text.replace(/__PROJECT_NAME__/g, self._projectName);
}

,["CPString","CPString"]), new objj_method(sel_getUid("htmlData:row:"), function $PopoverViewController__htmlData_row_(self, _cmd, rowData, row)
{
    var htmlCode = (((self._codeTemplate.replace("__REPLACE_THIS__", (rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), "code")))).replace("__REPLACE_LANGUAGE__", (rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), "language")))).replace("__PLACE_ROW_NUMBER_HERE__", row)).replace(/__PROJECT_NAME__/g, self._projectName);
    return (CPData.isa.method_msgSend["dataWithRawString:"] || _objj_forward)(CPData, (CPData.isa.method_dtable["dataWithRawString:"], "dataWithRawString:"), htmlCode);
}

,["CPData","CPDictionary","id"]), new objj_method(sel_getUid("textFieldSizeForTableView:row:rowData:"), function $PopoverViewController__textFieldSizeForTableView_row_rowData_(self, _cmd, tableView, row, rowData)
{
    var targetWidth = ((___r1 = ((___r2 = self._tableCellViewForText), ___r2 == null ? null : (___r2.isa.method_msgSend["textField"] || _objj_forward)(___r2, (self._tableCellViewForText.isa.method_dtable["textField"], "textField")))), ___r1 == null ? null : (___r1.isa.method_msgSend["frameSize"] || _objj_forward)(___r1, "frameSize")).width;
    ((___r1 = self._dummyLabel), ___r1 == null ? null : (___r1.isa.method_msgSend["setFrameSize:"] || _objj_forward)(___r1, (self._dummyLabel.isa.method_dtable["setFrameSize:"], "setFrameSize:"), ((___r2 = ((___r3 = self._tableCellViewForText), ___r3 == null ? null : (___r3.isa.method_msgSend["textField"] || _objj_forward)(___r3, (self._tableCellViewForText.isa.method_dtable["textField"], "textField")))), ___r2 == null ? null : (___r2.isa.method_msgSend["frameSize"] || _objj_forward)(___r2, "frameSize"))));
    ((___r1 = self._dummyLabel), ___r1 == null ? null : (___r1.isa.method_msgSend["setFont:"] || _objj_forward)(___r1, (self._dummyLabel.isa.method_dtable["setFont:"], "setFont:"), ((___r2 = ((___r3 = self._tableCellViewForText), ___r3 == null ? null : (___r3.isa.method_msgSend["textField"] || _objj_forward)(___r3, (self._tableCellViewForText.isa.method_dtable["textField"], "textField")))), ___r2 == null ? null : (___r2.isa.method_msgSend["font"] || _objj_forward)(___r2, "font"))));
    ((___r1 = self._dummyLabel), ___r1 == null ? null : (___r1.isa.method_msgSend["setStringValue:"] || _objj_forward)(___r1, (self._dummyLabel.isa.method_dtable["setStringValue:"], "setStringValue:"), (self.isa.method_msgSend["replacePlaceHolders:"] || _objj_forward)(self, (self.isa.method_dtable["replacePlaceHolders:"], "replacePlaceHolders:"), (rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), "content")))));
    ((___r1 = self._dummyLabel), ___r1 == null ? null : (___r1.isa.method_msgSend["sizeToFit"] || _objj_forward)(___r1, (self._dummyLabel.isa.method_dtable["sizeToFit"], "sizeToFit")));
    var targetHeight = ((___r1 = self._dummyLabel), ___r1 == null ? null : (___r1.isa.method_msgSend["frameSize"] || _objj_forward)(___r1, (self._dummyLabel.isa.method_dtable["frameSize"], "frameSize"))).height + 18;
    return CGSizeMake(targetWidth, targetHeight);
    var ___r1, ___r2, ___r3;
}

,["CGSize","CPTableView","CPInteger","CPDictionary"]), new objj_method(sel_getUid("imageSizeForTableView:withRowData:"), function $PopoverViewController__imageSizeForTableView_withRowData_(self, _cmd, tableView, rowData)
{
    var clipView = (tableView == null ? null : (tableView.isa.method_msgSend["superview"] || _objj_forward)(tableView, (tableView.isa.method_dtable["superview"], "superview")));
    var targetWidth = (clipView == null ? null : (clipView.isa.method_msgSend["frameSize"] || _objj_forward)(clipView, (clipView.isa.method_dtable["frameSize"], "frameSize"))).width;
    var targetHeight = (clipView == null ? null : (clipView.isa.method_msgSend["frameSize"] || _objj_forward)(clipView, (clipView.isa.method_dtable["frameSize"], "frameSize"))).width / (rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), "width")) * (rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), "height"));
    return CGSizeMake(targetWidth, targetHeight);
}

,["CGSize","CPTableView","CPDictionary"]), new objj_method(sel_getUid("saveRowSize:andLabelSize:forSubStepRow:"), function $PopoverViewController__saveRowSize_andLabelSize_forSubStepRow_(self, _cmd, rowSize, labelSize, rowIndex)
{
    var rowData = ((___r1 = self._tableDataArray), ___r1 == null ? null : (___r1.isa.method_msgSend["objectAtIndex:"] || _objj_forward)(___r1, (self._tableDataArray.isa.method_dtable["objectAtIndex:"], "objectAtIndex:"), rowIndex));
    var rowDimensions = ((___r1 = self._rowDimensionsDictionary), ___r1 == null ? null : (___r1.isa.method_msgSend["valueForKey:"] || _objj_forward)(___r1, (self._rowDimensionsDictionary.isa.method_dtable["valueForKey:"], "valueForKey:"), "" + self._currentMainStepNo + "_" + rowIndex));
    if (!rowDimensions)
    {
        rowDimensions = ((___r1 = (RowModel == null ? null : (RowModel.isa.method_msgSend["alloc"] || _objj_forward)(RowModel, (RowModel.isa.method_dtable["alloc"], "alloc")))), ___r1 == null ? null : (___r1.isa.method_msgSend["initWithRowSize:labelSize:type:"] || _objj_forward)(___r1, "initWithRowSize:labelSize:type:", rowSize, labelSize, (rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), "type"))));
    }
    else
    {
        (rowDimensions == null ? null : (rowDimensions.isa.method_msgSend["setType:"] || _objj_forward)(rowDimensions, (rowDimensions.isa.method_dtable["setType:"], "setType:"), (rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), "type"))));
        if (rowSize)
            (rowDimensions == null ? null : (rowDimensions.isa.method_msgSend["setRowSize:"] || _objj_forward)(rowDimensions, (rowDimensions.isa.method_dtable["setRowSize:"], "setRowSize:"), rowSize));
        if (labelSize)
            (rowDimensions == null ? null : (rowDimensions.isa.method_msgSend["setLabelSize:"] || _objj_forward)(rowDimensions, (rowDimensions.isa.method_dtable["setLabelSize:"], "setLabelSize:"), labelSize));
    }
    ((___r1 = self._rowDimensionsDictionary), ___r1 == null ? null : (___r1.isa.method_msgSend["setObject:forKey:"] || _objj_forward)(___r1, (self._rowDimensionsDictionary.isa.method_dtable["setObject:forKey:"], self._rowDimensionsDictionary.isa.method_dtable["setObject:forKey:"], "setObject:forKey:"), rowDimensions, "" + self._currentMainStepNo + "_" + rowIndex));
    var recordData = (CPKeyedArchiver.isa.method_msgSend["archivedDataWithRootObject:"] || _objj_forward)(CPKeyedArchiver, (CPKeyedArchiver.isa.method_dtable["archivedDataWithRootObject:"], "archivedDataWithRootObject:"), self._rowDimensionsDictionary);
    var defaults = (CPUserDefaults.isa.method_msgSend["standardUserDefaults"] || _objj_forward)(CPUserDefaults, (CPUserDefaults.isa.method_dtable["standardUserDefaults"], "standardUserDefaults"));
    (defaults == null ? null : (defaults.isa.method_msgSend["setObject:forKey:"] || _objj_forward)(defaults, (defaults.isa.method_dtable["setObject:forKey:"], defaults.isa.method_dtable["setObject:forKey:"], "setObject:forKey:"), (recordData == null ? null : (recordData.isa.method_msgSend["rawString"] || _objj_forward)(recordData, (recordData.isa.method_dtable["rawString"], "rawString"))), "rowDimensionsByMainStepsDictionary"));
    var ___r1;
}

,["void","CGSize","CGSize","CPInteger"]), new objj_method(sel_getUid("copyTheCode:"), function $PopoverViewController__copyTheCode_(self, _cmd, sender)
{
    var rowData = ((___r1 = self._tableDataArray), ___r1 == null ? null : (___r1.isa.method_msgSend["objectAtIndex:"] || _objj_forward)(___r1, (self._tableDataArray.isa.method_dtable["objectAtIndex:"], "objectAtIndex:"), ((___r2 = self._tableView), ___r2 == null ? null : (___r2.isa.method_msgSend["rowForView:"] || _objj_forward)(___r2, (self._tableView.isa.method_dtable["rowForView:"], "rowForView:"), sender))));
    console.info(sender);
    var pasteboard = (CPPasteboard.isa.method_msgSend["generalPasteboard"] || _objj_forward)(CPPasteboard, (CPPasteboard.isa.method_dtable["generalPasteboard"], "generalPasteboard"));
    (pasteboard == null ? null : (pasteboard.isa.method_msgSend["declareTypes:owner:"] || _objj_forward)(pasteboard, (pasteboard.isa.method_dtable["declareTypes:owner:"], pasteboard.isa.method_dtable["declareTypes:owner:"], "declareTypes:owner:"), [CPStringPboardType], nil));
    (pasteboard == null ? null : (pasteboard.isa.method_msgSend["setString:forType:"] || _objj_forward)(pasteboard, (pasteboard.isa.method_dtable["setString:forType:"], pasteboard.isa.method_dtable["setString:forType:"], "setString:forType:"), (rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), "code")), CPStringPboardType));
    document.execCommand("copy");
    var ___r1, ___r2;
}

,["void","id"]), new objj_method(sel_getUid("connection:didReceiveData:"), function $PopoverViewController__connection_didReceiveData_(self, _cmd, connection, dataString)
{
    if (((___r1 = (connection == null ? null : (connection.isa.method_msgSend["currentRequest"] || _objj_forward)(connection, (connection.isa.method_dtable["currentRequest"], "currentRequest")))), ___r1 == null ? null : (___r1.isa.method_msgSend["valueForHTTPHeaderField:"] || _objj_forward)(___r1, "valueForHTTPHeaderField:", "DownloadType")) == "CodeFragment")
    {
        var rowIndex = parseInt(((___r1 = (connection == null ? null : (connection.isa.method_msgSend["currentRequest"] || _objj_forward)(connection, (connection.isa.method_dtable["currentRequest"], "currentRequest")))), ___r1 == null ? null : (___r1.isa.method_msgSend["valueForHTTPHeaderField:"] || _objj_forward)(___r1, "valueForHTTPHeaderField:", "RowIndex")), 10);
        var subStepCode = ((___r1 = self._tableView), ___r1 == null ? null : (___r1.isa.method_msgSend["viewAtColumn:row:makeIfNecessary:"] || _objj_forward)(___r1, (self._tableView.isa.method_dtable["viewAtColumn:row:makeIfNecessary:"], self._tableView.isa.method_dtable["viewAtColumn:row:makeIfNecessary:"], self._tableView.isa.method_dtable["viewAtColumn:row:makeIfNecessary:"], "viewAtColumn:row:makeIfNecessary:"), 0, rowIndex, NO));
        var webView = (subStepCode == null ? null : (subStepCode.isa.method_msgSend["subviews"] || _objj_forward)(subStepCode, (subStepCode.isa.method_dtable["subviews"], "subviews")))[0];
        var rowData = ((___r1 = self._tableDataArray), ___r1 == null ? null : (___r1.isa.method_msgSend["objectAtIndex:"] || _objj_forward)(___r1, (self._tableDataArray.isa.method_dtable["objectAtIndex:"], "objectAtIndex:"), rowIndex));
        (rowData == null ? null : (rowData.isa.method_msgSend["setValue:forKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["setValue:forKey:"], rowData.isa.method_dtable["setValue:forKey:"], "setValue:forKey:"), dataString, "code"));
        (webView == null ? null : (webView.isa.method_msgSend["setMainFrameURL:"] || _objj_forward)(webView, (webView.isa.method_dtable["setMainFrameURL:"], "setMainFrameURL:"), "data:text/html;base64," + ((___r1 = (self.isa.method_msgSend["htmlData:row:"] || _objj_forward)(self, (self.isa.method_dtable["htmlData:row:"], self.isa.method_dtable["htmlData:row:"], "htmlData:row:"), rowData, rowIndex)), ___r1 == null ? null : (___r1.isa.method_msgSend["base64"] || _objj_forward)(___r1, "base64"))));
    }
    else
    {
        self._codeTemplate = dataString;
    }
    var ___r1;
}

,["void","CPURLConnection","CPString"]), new objj_method(sel_getUid("numberOfRowsInTableView:"), function $PopoverViewController__numberOfRowsInTableView_(self, _cmd, tableView)
{
    return ((___r1 = self._tableDataArray), ___r1 == null ? null : (___r1.isa.method_msgSend["count"] || _objj_forward)(___r1, (self._tableDataArray.isa.method_dtable["count"], "count")));
    var ___r1;
}

,["CPInteger","CPTableView"]), new objj_method(sel_getUid("tableView:shouldSelectRow:"), function $PopoverViewController__tableView_shouldSelectRow_(self, _cmd, tableView, row)
{
    return NO;
}

,["BOOL","CPTableView","id"]), new objj_method(sel_getUid("tableView:viewForTableColumn:row:"), function $PopoverViewController__tableView_viewForTableColumn_row_(self, _cmd, tableView, tableColumn, row)
{
    var rowData = ((___r1 = self._tableDataArray), ___r1 == null ? null : (___r1.isa.method_msgSend["objectAtIndex:"] || _objj_forward)(___r1, (self._tableDataArray.isa.method_dtable["objectAtIndex:"], "objectAtIndex:"), row));
    var rowSizes = ((___r1 = self._rowDimensionsDictionary), ___r1 == null ? null : (___r1.isa.method_msgSend["valueForKey:"] || _objj_forward)(___r1, (self._rowDimensionsDictionary.isa.method_dtable["valueForKey:"], "valueForKey:"), "" + self._currentMainStepNo + "_" + row));
    switch((rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), "type"))) {
        case TEXT_TYPE:
            var subStepText = (tableView == null ? null : (tableView.isa.method_msgSend["makeViewWithIdentifier:owner:"] || _objj_forward)(tableView, (tableView.isa.method_dtable["makeViewWithIdentifier:owner:"], tableView.isa.method_dtable["makeViewWithIdentifier:owner:"], "makeViewWithIdentifier:owner:"), "SubStepText", self));
            ((___r1 = (subStepText == null ? null : (subStepText.isa.method_msgSend["textField"] || _objj_forward)(subStepText, (subStepText.isa.method_dtable["textField"], "textField")))), ___r1 == null ? null : (___r1.isa.method_msgSend["setStringValue:"] || _objj_forward)(___r1, "setStringValue:", (self.isa.method_msgSend["replacePlaceHolders:"] || _objj_forward)(self, (self.isa.method_dtable["replacePlaceHolders:"], "replacePlaceHolders:"), (rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), "content")))));
            ((___r1 = (subStepText == null ? null : (subStepText.isa.method_msgSend["textField"] || _objj_forward)(subStepText, (subStepText.isa.method_dtable["textField"], "textField")))), ___r1 == null ? null : (___r1.isa.method_msgSend["sizeToFit"] || _objj_forward)(___r1, "sizeToFit"));
            ((___r1 = (subStepText == null ? null : (subStepText.isa.method_msgSend["textField"] || _objj_forward)(subStepText, (subStepText.isa.method_dtable["textField"], "textField")))), ___r1 == null ? null : (___r1.isa.method_msgSend["setFrameOrigin:"] || _objj_forward)(___r1, "setFrameOrigin:", CGPointMake(27, 0)));
            ((___r1 = (subStepText == null ? null : (subStepText.isa.method_msgSend["textField"] || _objj_forward)(subStepText, (subStepText.isa.method_dtable["textField"], "textField")))), ___r1 == null ? null : (___r1.isa.method_msgSend["setFrameSize:"] || _objj_forward)(___r1, "setFrameSize:", (rowSizes == null ? null : (rowSizes.isa.method_msgSend["labelSize"] || _objj_forward)(rowSizes, (rowSizes.isa.method_dtable["labelSize"], "labelSize")))));
            return subStepText;
        case IMAGE_TYPE:
            var subStepImage = (tableView == null ? null : (tableView.isa.method_msgSend["makeViewWithIdentifier:owner:"] || _objj_forward)(tableView, (tableView.isa.method_dtable["makeViewWithIdentifier:owner:"], tableView.isa.method_dtable["makeViewWithIdentifier:owner:"], "makeViewWithIdentifier:owner:"), "SubStepImage", self));
            var imageName = (rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), "imageName"));
            var targetSize = (rowSizes == null ? null : (rowSizes.isa.method_msgSend["rowSize"] || _objj_forward)(rowSizes, (rowSizes.isa.method_dtable["rowSize"], "rowSize")));
            if (targetSize.width > (rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), "width")))
                targetSize.width = (rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), "width"));
            if (targetSize.height > (rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), "height")))
                targetSize.height = (rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), "height"));
            var image = ((___r1 = (CPImage.isa.method_msgSend["alloc"] || _objj_forward)(CPImage, (CPImage.isa.method_dtable["alloc"], "alloc"))), ___r1 == null ? null : (___r1.isa.method_msgSend["initWithContentsOfFile:size:"] || _objj_forward)(___r1, "initWithContentsOfFile:size:", self._baseURL + imageName, targetSize));
            ((___r1 = (subStepImage == null ? null : (subStepImage.isa.method_msgSend["imageView"] || _objj_forward)(subStepImage, (subStepImage.isa.method_dtable["imageView"], "imageView")))), ___r1 == null ? null : (___r1.isa.method_msgSend["setImage:"] || _objj_forward)(___r1, "setImage:", image));
            return subStepImage;
        case CODE_TYPE:
            var subStepCode = (tableView == null ? null : (tableView.isa.method_msgSend["makeViewWithIdentifier:owner:"] || _objj_forward)(tableView, (tableView.isa.method_dtable["makeViewWithIdentifier:owner:"], tableView.isa.method_dtable["makeViewWithIdentifier:owner:"], "makeViewWithIdentifier:owner:"), "CodeView", self));
            var buttonImage = ((___r1 = (CPImage.isa.method_msgSend["alloc"] || _objj_forward)(CPImage, (CPImage.isa.method_dtable["alloc"], "alloc"))), ___r1 == null ? null : (___r1.isa.method_msgSend["initWithContentsOfFile:"] || _objj_forward)(___r1, "initWithContentsOfFile:", ((___r2 = self._stepsBundle), ___r2 == null ? null : (___r2.isa.method_msgSend["pathForResource:"] || _objj_forward)(___r2, (self._stepsBundle.isa.method_dtable["pathForResource:"], "pathForResource:"), "if_Copy_728927.png"))));
            var buttonView = (subStepCode == null ? null : (subStepCode.isa.method_msgSend["subviews"] || _objj_forward)(subStepCode, (subStepCode.isa.method_dtable["subviews"], "subviews")))[1];
            (buttonView == null ? null : (buttonView.isa.method_msgSend["setImage:"] || _objj_forward)(buttonView, (buttonView.isa.method_dtable["setImage:"], "setImage:"), buttonImage));
            var webView = (subStepCode == null ? null : (subStepCode.isa.method_msgSend["subviews"] || _objj_forward)(subStepCode, (subStepCode.isa.method_dtable["subviews"], "subviews")))[0];
            (webView == null ? null : (webView.isa.method_msgSend["setBackgroundColor:"] || _objj_forward)(webView, (webView.isa.method_dtable["setBackgroundColor:"], "setBackgroundColor:"), (CPColor.isa.method_msgSend["colorWithHexString:"] || _objj_forward)(CPColor, (CPColor.isa.method_dtable["colorWithHexString:"], "colorWithHexString:"), "232323")));
            webView._iframe.style.pointerEvents = "none";
            if ((rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), "codeFileURL")))
            {
                var url = (CPURL.isa.method_msgSend["URLWithString:"] || _objj_forward)(CPURL, (CPURL.isa.method_dtable["URLWithString:"], "URLWithString:"), (rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), "codeFileURL")));
                var request = (CPURLRequest.isa.method_msgSend["requestWithURL:"] || _objj_forward)(CPURLRequest, (CPURLRequest.isa.method_dtable["requestWithURL:"], "requestWithURL:"), url);
                (request == null ? null : (request.isa.method_msgSend["setValue:forHTTPHeaderField:"] || _objj_forward)(request, (request.isa.method_dtable["setValue:forHTTPHeaderField:"], request.isa.method_dtable["setValue:forHTTPHeaderField:"], "setValue:forHTTPHeaderField:"), "CodeFragment", "DownloadType"));
                (request == null ? null : (request.isa.method_msgSend["setValue:forHTTPHeaderField:"] || _objj_forward)(request, (request.isa.method_dtable["setValue:forHTTPHeaderField:"], request.isa.method_dtable["setValue:forHTTPHeaderField:"], "setValue:forHTTPHeaderField:"), row, "RowIndex"));
                var connection = ((___r1 = (CPURLConnection.isa.method_msgSend["alloc"] || _objj_forward)(CPURLConnection, (CPURLConnection.isa.method_dtable["alloc"], "alloc"))), ___r1 == null ? null : (___r1.isa.method_msgSend["initWithRequest:delegate:"] || _objj_forward)(___r1, "initWithRequest:delegate:", request, self));
            }
            else
            {
                (webView == null ? null : (webView.isa.method_msgSend["setMainFrameURL:"] || _objj_forward)(webView, (webView.isa.method_dtable["setMainFrameURL:"], "setMainFrameURL:"), "data:text/html;base64," + ((___r1 = (self.isa.method_msgSend["htmlData:row:"] || _objj_forward)(self, (self.isa.method_dtable["htmlData:row:"], self.isa.method_dtable["htmlData:row:"], "htmlData:row:"), rowData, row)), ___r1 == null ? null : (___r1.isa.method_msgSend["base64"] || _objj_forward)(___r1, "base64"))));
            }
            return subStepCode;
    }
    return nil;
    var ___r1, ___r2;
}

,["CPView","CPTableView","CPTableColumn","CPInteger"]), new objj_method(sel_getUid("tableView:heightOfRow:"), function $PopoverViewController__tableView_heightOfRow_(self, _cmd, tableView, rowIndex)
{
    var rowData = ((___r1 = self._tableDataArray), ___r1 == null ? null : (___r1.isa.method_msgSend["objectAtIndex:"] || _objj_forward)(___r1, (self._tableDataArray.isa.method_dtable["objectAtIndex:"], "objectAtIndex:"), rowIndex));
    var rowDimensionsKey = "" + self._currentMainStepNo + "_" + rowIndex;
    var rowDimensions = ((___r1 = self._rowDimensionsDictionary), ___r1 == null ? null : (___r1.isa.method_msgSend["valueForKey:"] || _objj_forward)(___r1, (self._rowDimensionsDictionary.isa.method_dtable["valueForKey:"], "valueForKey:"), rowDimensionsKey));
    var currentRowDimensionType = (rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), "type"));
    if (currentRowDimensionType != CODE_TYPE && rowDimensions && self._subStepsDidChange == NO)
    {
        return (rowDimensions == null ? null : (rowDimensions.isa.method_msgSend["rowSize"] || _objj_forward)(rowDimensions, (rowDimensions.isa.method_dtable["rowSize"], "rowSize"))).height;
    }
    else
    {
        self._subStepsDidChange = ((___r1 = self._tableDataArray), ___r1 == null ? null : (___r1.isa.method_msgSend["count"] || _objj_forward)(___r1, (self._tableDataArray.isa.method_dtable["count"], "count"))) - 1 == rowIndex ? NO : YES;
        var rowSize;
        var labelSize;
        switch((rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), "type"))) {
            case IMAGE_TYPE:
                rowSize = (self.isa.method_msgSend["imageSizeForTableView:withRowData:"] || _objj_forward)(self, (self.isa.method_dtable["imageSizeForTableView:withRowData:"], self.isa.method_dtable["imageSizeForTableView:withRowData:"], "imageSizeForTableView:withRowData:"), tableView, rowData);
                break;
            case TEXT_TYPE:
                labelSize = (self.isa.method_msgSend["textFieldSizeForTableView:row:rowData:"] || _objj_forward)(self, (self.isa.method_dtable["textFieldSizeForTableView:row:rowData:"], self.isa.method_dtable["textFieldSizeForTableView:row:rowData:"], self.isa.method_dtable["textFieldSizeForTableView:row:rowData:"], "textFieldSizeForTableView:row:rowData:"), tableView, rowIndex, rowData);
                rowSize = CGSizeMake(((___r1 = self._tableView), ___r1 == null ? null : (___r1.isa.method_msgSend["frameSize"] || _objj_forward)(___r1, (self._tableView.isa.method_dtable["frameSize"], "frameSize"))).width, labelSize.height < 20 ? 19 : labelSize.height);
                break;
            case CODE_TYPE:
                rowSize = (rowDimensions == null ? null : (rowDimensions.isa.method_msgSend["rowSize"] || _objj_forward)(rowDimensions, (rowDimensions.isa.method_dtable["rowSize"], "rowSize"))) ? (rowDimensions == null ? null : (rowDimensions.isa.method_msgSend["rowSize"] || _objj_forward)(rowDimensions, (rowDimensions.isa.method_dtable["rowSize"], "rowSize"))) : nil;
                break;
        }
        (self.isa.method_msgSend["saveRowSize:andLabelSize:forSubStepRow:"] || _objj_forward)(self, (self.isa.method_dtable["saveRowSize:andLabelSize:forSubStepRow:"], self.isa.method_dtable["saveRowSize:andLabelSize:forSubStepRow:"], self.isa.method_dtable["saveRowSize:andLabelSize:forSubStepRow:"], "saveRowSize:andLabelSize:forSubStepRow:"), rowSize, labelSize, rowIndex);
        return rowSize != nil ? rowSize.height : 99;
    }
    var ___r1;
}

,["float","CPTableView","CPInteger"])]);
}

{var the_class = objj_allocateClassPair(CPObject, "RowModel"),
meta_class = the_class.isa;class_addIvars(the_class, [new objj_ivar("_rowSize", "CGSize"), new objj_ivar("_labelSize", "CGSize"), new objj_ivar("_type", "int")]);objj_registerClassPair(the_class);
class_addMethods(the_class, [new objj_method(sel_getUid("rowSize"), function $RowModel__rowSize(self, _cmd)
{
    return self._rowSize;
}

,["CGSize"]), new objj_method(sel_getUid("setRowSize:"), function $RowModel__setRowSize_(self, _cmd, newValue)
{
    self._rowSize = newValue;
}

,["void","CGSize"]), new objj_method(sel_getUid("labelSize"), function $RowModel__labelSize(self, _cmd)
{
    return self._labelSize;
}

,["CGSize"]), new objj_method(sel_getUid("setLabelSize:"), function $RowModel__setLabelSize_(self, _cmd, newValue)
{
    self._labelSize = newValue;
}

,["void","CGSize"]), new objj_method(sel_getUid("type"), function $RowModel__type(self, _cmd)
{
    return self._type;
}

,["int"]), new objj_method(sel_getUid("setType:"), function $RowModel__setType_(self, _cmd, newValue)
{
    self._type = newValue;
}

,["void","int"]), new objj_method(sel_getUid("initWithRowSize:labelSize:type:"), function $RowModel__initWithRowSize_labelSize_type_(self, _cmd, rowSize, labelSize, type)
{
    self = (objj_getClass("RowModel").super_class.method_dtable["init"] || _objj_forward)(self, "init");
    self._rowSize = rowSize;
    self._labelSize = labelSize;
    self._type = type;
    return self;
}

,["id","float","float","int"]), new objj_method(sel_getUid("encodeWithCoder:"), function $RowModel__encodeWithCoder_(self, _cmd, encoder)
{
    if (self._rowSize)
        (encoder == null ? null : (encoder.isa.method_msgSend["encodeSize:forKey:"] || _objj_forward)(encoder, (encoder.isa.method_dtable["encodeSize:forKey:"], encoder.isa.method_dtable["encodeSize:forKey:"], "encodeSize:forKey:"), self._rowSize, "rowSize"));
    if (self._labelSize)
        (encoder == null ? null : (encoder.isa.method_msgSend["encodeSize:forKey:"] || _objj_forward)(encoder, (encoder.isa.method_dtable["encodeSize:forKey:"], encoder.isa.method_dtable["encodeSize:forKey:"], "encodeSize:forKey:"), self._labelSize, "labelSize"));
    if (self._type)
        (encoder == null ? null : (encoder.isa.method_msgSend["encodeObject:forKey:"] || _objj_forward)(encoder, (encoder.isa.method_dtable["encodeObject:forKey:"], encoder.isa.method_dtable["encodeObject:forKey:"], "encodeObject:forKey:"), self._type, "type"));
}

,["void","CPCoder"]), new objj_method(sel_getUid("initWithCoder:"), function $RowModel__initWithCoder_(self, _cmd, decoder)
{
    self = (objj_getClass("RowModel").super_class.method_dtable["init"] || _objj_forward)(self, "init");
    if (self)
    {
        self._rowSize = (decoder == null ? null : (decoder.isa.method_msgSend["decodeSizeForKey:"] || _objj_forward)(decoder, (decoder.isa.method_dtable["decodeSizeForKey:"], "decodeSizeForKey:"), "rowSize"));
        self._labelSize = (decoder == null ? null : (decoder.isa.method_msgSend["decodeSizeForKey:"] || _objj_forward)(decoder, (decoder.isa.method_dtable["decodeSizeForKey:"], "decodeSizeForKey:"), "labelSize"));
        self._type = (decoder == null ? null : (decoder.isa.method_msgSend["decodeIntForKey:"] || _objj_forward)(decoder, (decoder.isa.method_dtable["decodeIntForKey:"], "decodeIntForKey:"), "type"));
    }
    return self;
}

,["id","CPCoder"])]);
}
p;21;StepsDataController.jt;19599;@STATIC;1.0;I;23;Foundation/Foundation.jt;19551;

objj_executeFile("Foundation/Foundation.j", NO);{var the_protocol = objj_allocateProtocol("StepsDataController");
var aProtocol = objj_getProtocol("CPObject");
if (!aProtocol) throw new SyntaxError("*** Could not find definition for protocol \"StepsDataController\"");
protocol_addProtocol(the_protocol, aProtocol);
objj_registerProtocol(the_protocol);
}TEXT_TYPE = 0;
IMAGE_TYPE = 1;
CODE_TYPE = 2;
MAINSTEPS_DOWNLOAD = 0;
SUBSTEPS_DOWNLOAD = 1;

{var the_class = objj_allocateClassPair(CPObject, "StepsState"),
meta_class = the_class.isa;class_addIvars(the_class, [new objj_ivar("_currentMainStepTimestamp", "int"), new objj_ivar("_windowLocation", "CGPoint")]);objj_registerClassPair(the_class);
class_addMethods(the_class, [new objj_method(sel_getUid("currentMainStepTimestamp"), function $StepsState__currentMainStepTimestamp(self, _cmd)
{
    return self._currentMainStepTimestamp;
}

,["int"]), new objj_method(sel_getUid("setCurrentMainStepTimestamp:"), function $StepsState__setCurrentMainStepTimestamp_(self, _cmd, newValue)
{
    self._currentMainStepTimestamp = newValue;
}

,["void","int"]), new objj_method(sel_getUid("windowLocation"), function $StepsState__windowLocation(self, _cmd)
{
    return self._windowLocation;
}

,["CGPoint"]), new objj_method(sel_getUid("setWindowLocation:"), function $StepsState__setWindowLocation_(self, _cmd, newValue)
{
    self._windowLocation = newValue;
}

,["void","CGPoint"]), new objj_method(sel_getUid("encodeWithCoder:"), function $StepsState__encodeWithCoder_(self, _cmd, encoder)
{
    if (self._currentMainStepTimestamp)
        (encoder == null ? null : (encoder.isa.method_msgSend["encodeObject:forKey:"] || _objj_forward)(encoder, (encoder.isa.method_dtable["encodeObject:forKey:"], encoder.isa.method_dtable["encodeObject:forKey:"], "encodeObject:forKey:"), self._currentMainStepTimestamp, "currentMainStepTimestamp"));
    if (self._windowLocation)
        (encoder == null ? null : (encoder.isa.method_msgSend["encodePoint:forKey:"] || _objj_forward)(encoder, (encoder.isa.method_dtable["encodePoint:forKey:"], encoder.isa.method_dtable["encodePoint:forKey:"], "encodePoint:forKey:"), self._windowLocation, "windowLocation"));
}

,["void","CPCoder"]), new objj_method(sel_getUid("initWithCoder:"), function $StepsState__initWithCoder_(self, _cmd, decoder)
{
    self = (objj_getClass("StepsState").super_class.method_dtable["init"] || _objj_forward)(self, "init");
    if (self)
    {
        self._currentMainStepTimestamp = (decoder == null ? null : (decoder.isa.method_msgSend["decodeIntForKey:"] || _objj_forward)(decoder, (decoder.isa.method_dtable["decodeIntForKey:"], "decodeIntForKey:"), "currentMainStepTimestamp"));
        self._windowLocation = (decoder == null ? null : (decoder.isa.method_msgSend["decodePointForKey:"] || _objj_forward)(decoder, (decoder.isa.method_dtable["decodePointForKey:"], "decodePointForKey:"), "windowLocation"));
    }
    return self;
}

,["id","CPCoder"])]);
}

{var the_class = objj_allocateClassPair(CPObject, "StepsDataController"),
meta_class = the_class.isa;class_addIvars(the_class, [new objj_ivar("_mainStepsArray", "CPArray"), new objj_ivar("_subStepsArray", "CPArray"), new objj_ivar("_downloadQueueDictionary", "CPDictionary"), new objj_ivar("_delegate", "id"), new objj_ivar("_state", "StepsState")]);objj_registerClassPair(the_class);
class_addMethods(the_class, [new objj_method(sel_getUid("delegate"), function $StepsDataController__delegate(self, _cmd)
{
    return self._delegate;
}

,["id"]), new objj_method(sel_getUid("setDelegate:"), function $StepsDataController__setDelegate_(self, _cmd, newValue)
{
    self._delegate = newValue;
}

,["void","id"]), new objj_method(sel_getUid("state"), function $StepsDataController__state(self, _cmd)
{
    return self._state;
}

,["StepsState"]), new objj_method(sel_getUid("setState:"), function $StepsDataController__setState_(self, _cmd, newValue)
{
    self._state = newValue;
}

,["void","StepsState"]), new objj_method(sel_getUid("init"), function $StepsDataController__init(self, _cmd)
{
    self = (objj_getClass("StepsDataController").super_class.method_dtable["init"] || _objj_forward)(self, "init");
    self._downloadQueueDictionary = (___r1 = (CPDictionary.isa.method_msgSend["alloc"] || _objj_forward)(CPDictionary, "alloc"), ___r1 == null ? null : (___r1.isa.method_msgSend["init"] || _objj_forward)(___r1, "init"));
    (self == null ? null : (self.isa.method_msgSend["downloadMainStepsURL:"] || _objj_forward)(self, (self.isa.method_dtable["downloadMainStepsURL:"], "downloadMainStepsURL:"), "Resources/steps/steps.plist"));
    (self == null ? null : (self.isa.method_msgSend["loadState"] || _objj_forward)(self, (self.isa.method_dtable["loadState"], "loadState")));
    return self;
    var ___r1;
}

,["id"]), new objj_method(sel_getUid("setDelegate:"), function $StepsDataController__setDelegate_(self, _cmd, delegate)
{
    self._delegate = delegate;
}

,["void","id"]), new objj_method(sel_getUid("tableDataArray"), function $StepsDataController__tableDataArray(self, _cmd)
{
    return self._mainStepsArray;
}

,["CPDictionary"]), new objj_method(sel_getUid("baseURLForRow:"), function $StepsDataController__baseURLForRow_(self, _cmd, rowIndex)
{
    return ((___r1 = ((___r2 = self._mainStepsArray), ___r2 == null ? null : (___r2.isa.method_msgSend["objectAtIndex:"] || _objj_forward)(___r2, (self._mainStepsArray.isa.method_dtable["objectAtIndex:"], "objectAtIndex:"), rowIndex))), ___r1 == null ? null : (___r1.isa.method_msgSend["valueForKey:"] || _objj_forward)(___r1, "valueForKey:", "baseURL"));
    var ___r1, ___r2;
}

,["CPString","CPInteger"]), new objj_method(sel_getUid("downloadSubStepsForMainStepRow:"), function $StepsDataController__downloadSubStepsForMainStepRow_(self, _cmd, row)
{
    var rowData = ((___r1 = self._mainStepsArray), ___r1 == null ? null : (___r1.isa.method_msgSend["objectAtIndex:"] || _objj_forward)(___r1, (self._mainStepsArray.isa.method_dtable["objectAtIndex:"], "objectAtIndex:"), row));
    if ((rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), "subStepsFileName")))
    {
        var URL = (rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), "baseURL")) + (rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), "subStepsFileName"));
        var connection = (self.isa.method_msgSend["downloadURL:"] || _objj_forward)(self, (self.isa.method_dtable["downloadURL:"], "downloadURL:"), URL);
        ((___r1 = self._downloadQueueDictionary), ___r1 == null ? null : (___r1.isa.method_msgSend["setValue:forKey:"] || _objj_forward)(___r1, (self._downloadQueueDictionary.isa.method_dtable["setValue:forKey:"], self._downloadQueueDictionary.isa.method_dtable["setValue:forKey:"], "setValue:forKey:"), SUBSTEPS_DOWNLOAD, (connection == null ? null : (connection.isa.method_msgSend["UID"] || _objj_forward)(connection, (connection.isa.method_dtable["UID"], "UID")))));
    }
    else
    {
        self._subStepsArray = ((___r1 = ((___r2 = self._mainStepsArray), ___r2 == null ? null : (___r2.isa.method_msgSend["objectAtIndex:"] || _objj_forward)(___r2, (self._mainStepsArray.isa.method_dtable["objectAtIndex:"], "objectAtIndex:"), row))), ___r1 == null ? null : (___r1.isa.method_msgSend["valueForKey:"] || _objj_forward)(___r1, "valueForKey:", "subSteps"));
        var recordName = "mainStep" + row + "_subSteps";
        var defaults = (CPUserDefaults.isa.method_msgSend["standardUserDefaults"] || _objj_forward)(CPUserDefaults, (CPUserDefaults.isa.method_dtable["standardUserDefaults"], "standardUserDefaults"));
        var recordData = (CPKeyedArchiver.isa.method_msgSend["archivedDataWithRootObject:"] || _objj_forward)(CPKeyedArchiver, (CPKeyedArchiver.isa.method_dtable["archivedDataWithRootObject:"], "archivedDataWithRootObject:"), self._subStepsArray);
        var subStepsDidChange = (defaults == null ? null : (defaults.isa.method_msgSend["stringForKey:"] || _objj_forward)(defaults, (defaults.isa.method_dtable["stringForKey:"], "stringForKey:"), recordName)) != (recordData == null ? null : (recordData.isa.method_msgSend["rawString"] || _objj_forward)(recordData, (recordData.isa.method_dtable["rawString"], "rawString"))) ? YES : NO;
        if (!(defaults == null ? null : (defaults.isa.method_msgSend["stringForKey:"] || _objj_forward)(defaults, (defaults.isa.method_dtable["stringForKey:"], "stringForKey:"), recordName)) || subStepsDidChange)
            (defaults == null ? null : (defaults.isa.method_msgSend["setObject:forKey:"] || _objj_forward)(defaults, (defaults.isa.method_dtable["setObject:forKey:"], defaults.isa.method_dtable["setObject:forKey:"], "setObject:forKey:"), (recordData == null ? null : (recordData.isa.method_msgSend["rawString"] || _objj_forward)(recordData, (recordData.isa.method_dtable["rawString"], "rawString"))), recordName));
        if (self._delegate)
            if (((___r1 = self._delegate), ___r1 == null ? null : (___r1.isa.method_msgSend["respondsToSelector:"] || _objj_forward)(___r1, (self._delegate.isa.method_dtable["respondsToSelector:"], "respondsToSelector:"), sel_getUid("subStepsDidLoad:subStepsDidChange:"))))
                ((___r1 = self._delegate), ___r1 == null ? null : (___r1.isa.method_msgSend["subStepsDidLoad:subStepsDidChange:"] || _objj_forward)(___r1, (self._delegate.isa.method_dtable["subStepsDidLoad:subStepsDidChange:"], self._delegate.isa.method_dtable["subStepsDidLoad:subStepsDidChange:"], "subStepsDidLoad:subStepsDidChange:"), self._subStepsArray, subStepsDidChange));
    }
    var ___r1, ___r2;
}

,["void","CPInteger"]), new objj_method(sel_getUid("downloadMainStepsURL:"), function $StepsDataController__downloadMainStepsURL_(self, _cmd, URL)
{
    var connection = (self.isa.method_msgSend["downloadURL:"] || _objj_forward)(self, (self.isa.method_dtable["downloadURL:"], "downloadURL:"), URL);
    ((___r1 = self._downloadQueueDictionary), ___r1 == null ? null : (___r1.isa.method_msgSend["setValue:forKey:"] || _objj_forward)(___r1, (self._downloadQueueDictionary.isa.method_dtable["setValue:forKey:"], self._downloadQueueDictionary.isa.method_dtable["setValue:forKey:"], "setValue:forKey:"), MAINSTEPS_DOWNLOAD, (connection == null ? null : (connection.isa.method_msgSend["UID"] || _objj_forward)(connection, (connection.isa.method_dtable["UID"], "UID")))));
    var ___r1;
}

,["void","CPString"]), new objj_method(sel_getUid("downloadURL:"), function $StepsDataController__downloadURL_(self, _cmd, URL)
{
    var url = (CPURL.isa.method_msgSend["URLWithString:"] || _objj_forward)(CPURL, (CPURL.isa.method_dtable["URLWithString:"], "URLWithString:"), URL + "?t=" + Date.now());
    var request = (CPURLRequest.isa.method_msgSend["requestWithURL:"] || _objj_forward)(CPURLRequest, (CPURLRequest.isa.method_dtable["requestWithURL:"], "requestWithURL:"), url);
    var connection = ((___r1 = (CPURLConnection.isa.method_msgSend["alloc"] || _objj_forward)(CPURLConnection, (CPURLConnection.isa.method_dtable["alloc"], "alloc"))), ___r1 == null ? null : (___r1.isa.method_msgSend["initWithRequest:delegate:"] || _objj_forward)(___r1, "initWithRequest:delegate:", request, self));
    return connection;
    var ___r1;
}

,["id","CPString"]), new objj_method(sel_getUid("loadState"), function $StepsDataController__loadState(self, _cmd)
{
    var projectName = ((___r1 = (CPBundle.isa.method_msgSend["mainBundle"] || _objj_forward)(CPBundle, (CPBundle.isa.method_dtable["mainBundle"], "mainBundle"))), ___r1 == null ? null : (___r1.isa.method_msgSend["objectForInfoDictionaryKey:"] || _objj_forward)(___r1, "objectForInfoDictionaryKey:", "CPBundleName"));
    var archivedState = ((___r1 = (CPUserDefaults.isa.method_msgSend["standardUserDefaults"] || _objj_forward)(CPUserDefaults, (CPUserDefaults.isa.method_dtable["standardUserDefaults"], "standardUserDefaults"))), ___r1 == null ? null : (___r1.isa.method_msgSend["objectForKey:"] || _objj_forward)(___r1, "objectForKey:", projectName));
    if (archivedState)
    {
        self._state = (CPKeyedUnarchiver.isa.method_msgSend["unarchiveObjectWithData:"] || _objj_forward)(CPKeyedUnarchiver, (CPKeyedUnarchiver.isa.method_dtable["unarchiveObjectWithData:"], "unarchiveObjectWithData:"), (CPData.isa.method_msgSend["dataWithRawString:"] || _objj_forward)(CPData, (CPData.isa.method_dtable["dataWithRawString:"], "dataWithRawString:"), archivedState));
        if (!self._state)
        {
            self._state = ((___r1 = (StepsState.isa.method_msgSend["alloc"] || _objj_forward)(StepsState, (StepsState.isa.method_dtable["alloc"], "alloc"))), ___r1 == null ? null : (___r1.isa.method_msgSend["init"] || _objj_forward)(___r1, "init"));
        }
    }
    var ___r1;
}

,["void"]), new objj_method(sel_getUid("saveState"), function $StepsDataController__saveState(self, _cmd)
{
    var archivedState = (CPKeyedArchiver.isa.method_msgSend["archivedDataWithRootObject:"] || _objj_forward)(CPKeyedArchiver, (CPKeyedArchiver.isa.method_dtable["archivedDataWithRootObject:"], "archivedDataWithRootObject:"), self._state);
    var defaults = (CPUserDefaults.isa.method_msgSend["standardUserDefaults"] || _objj_forward)(CPUserDefaults, (CPUserDefaults.isa.method_dtable["standardUserDefaults"], "standardUserDefaults"));
    var projectName = ((___r1 = (CPBundle.isa.method_msgSend["mainBundle"] || _objj_forward)(CPBundle, (CPBundle.isa.method_dtable["mainBundle"], "mainBundle"))), ___r1 == null ? null : (___r1.isa.method_msgSend["objectForInfoDictionaryKey:"] || _objj_forward)(___r1, "objectForInfoDictionaryKey:", "CPBundleName"));
    (defaults == null ? null : (defaults.isa.method_msgSend["setObject:forKey:"] || _objj_forward)(defaults, (defaults.isa.method_dtable["setObject:forKey:"], defaults.isa.method_dtable["setObject:forKey:"], "setObject:forKey:"), (archivedState == null ? null : (archivedState.isa.method_msgSend["rawString"] || _objj_forward)(archivedState, (archivedState.isa.method_dtable["rawString"], "rawString"))), projectName));
    var ___r1;
}

,["void"]), new objj_method(sel_getUid("connection:didReceiveData:"), function $StepsDataController__connection_didReceiveData_(self, _cmd, connection, downloadedString)
{
    switch(((___r1 = self._downloadQueueDictionary), ___r1 == null ? null : (___r1.isa.method_msgSend["valueForKey:"] || _objj_forward)(___r1, (self._downloadQueueDictionary.isa.method_dtable["valueForKey:"], "valueForKey:"), (connection == null ? null : (connection.isa.method_msgSend["UID"] || _objj_forward)(connection, (connection.isa.method_dtable["UID"], "UID")))))) {
        case MAINSTEPS_DOWNLOAD:
            self._mainStepsArray = CFPropertyList.propertyListFromXML(downloadedString);
            if (self._delegate)
                if (((___r1 = self._delegate), ___r1 == null ? null : (___r1.isa.method_msgSend["respondsToSelector:"] || _objj_forward)(___r1, (self._delegate.isa.method_dtable["respondsToSelector:"], "respondsToSelector:"), sel_getUid("mainStepsDidLoad:"))))
                    ((___r1 = self._delegate), ___r1 == null ? null : (___r1.isa.method_msgSend["mainStepsDidLoad:"] || _objj_forward)(___r1, (self._delegate.isa.method_dtable["mainStepsDidLoad:"], "mainStepsDidLoad:"), self._mainStepsArray));
            if (((___r1 = self._state), ___r1 == null ? null : (___r1.isa.method_msgSend["currentMainStepTimestamp"] || _objj_forward)(___r1, (self._state.isa.method_dtable["currentMainStepTimestamp"], "currentMainStepTimestamp"))) > 0)
            {
                var rowNumberToBeSelected;
                for (var i = 0; i < self._mainStepsArray.length; i++)
                {
                    if (((___r1 = self._mainStepsArray[i]), ___r1 == null ? null : (___r1.isa.method_msgSend["valueForKey:"] || _objj_forward)(___r1, "valueForKey:", "timestamp")) == ((___r1 = self._state), ___r1 == null ? null : (___r1.isa.method_msgSend["currentMainStepTimestamp"] || _objj_forward)(___r1, (self._state.isa.method_dtable["currentMainStepTimestamp"], "currentMainStepTimestamp"))))
                    {
                        rowNumberToBeSelected = i;
                        break;
                    }
                }
                if (rowNumberToBeSelected != null)
                {
                    var notificationCenter = (CPNotificationCenter.isa.method_msgSend["defaultCenter"] || _objj_forward)(CPNotificationCenter, (CPNotificationCenter.isa.method_dtable["defaultCenter"], "defaultCenter"));
                    (notificationCenter == null ? null : (notificationCenter.isa.method_msgSend["postNotificationName:object:userInfo:"] || _objj_forward)(notificationCenter, (notificationCenter.isa.method_dtable["postNotificationName:object:userInfo:"], notificationCenter.isa.method_dtable["postNotificationName:object:userInfo:"], notificationCenter.isa.method_dtable["postNotificationName:object:userInfo:"], "postNotificationName:object:userInfo:"), "SelectTableRow", rowNumberToBeSelected, nil));
                }
            }
            break;
        case SUBSTEPS_DOWNLOAD:
            var subStepsFileName = ((___r1 = ((___r2 = (connection == null ? null : (connection.isa.method_msgSend["currentRequest"] || _objj_forward)(connection, (connection.isa.method_dtable["currentRequest"], "currentRequest")))), ___r2 == null ? null : (___r2.isa.method_msgSend["URL"] || _objj_forward)(___r2, "URL"))), ___r1 == null ? null : (___r1.isa.method_msgSend["lastPathComponent"] || _objj_forward)(___r1, "lastPathComponent"));
            var defaults = (CPUserDefaults.isa.method_msgSend["standardUserDefaults"] || _objj_forward)(CPUserDefaults, (CPUserDefaults.isa.method_dtable["standardUserDefaults"], "standardUserDefaults"));
            var subStepsDidChange = (defaults == null ? null : (defaults.isa.method_msgSend["stringForKey:"] || _objj_forward)(defaults, (defaults.isa.method_dtable["stringForKey:"], "stringForKey:"), subStepsFileName)) != downloadedString ? YES : NO;
            if (!(defaults == null ? null : (defaults.isa.method_msgSend["stringForKey:"] || _objj_forward)(defaults, (defaults.isa.method_dtable["stringForKey:"], "stringForKey:"), subStepsFileName)) || subStepsDidChange)
                (defaults == null ? null : (defaults.isa.method_msgSend["setObject:forKey:"] || _objj_forward)(defaults, (defaults.isa.method_dtable["setObject:forKey:"], defaults.isa.method_dtable["setObject:forKey:"], "setObject:forKey:"), downloadedString, subStepsFileName));
            self._subStepsArray = CFPropertyList.propertyListFromXML(downloadedString);
            if (self._delegate)
                if (((___r1 = self._delegate), ___r1 == null ? null : (___r1.isa.method_msgSend["respondsToSelector:"] || _objj_forward)(___r1, (self._delegate.isa.method_dtable["respondsToSelector:"], "respondsToSelector:"), sel_getUid("subStepsDidLoad:subStepsDidChange:"))))
                    ((___r1 = self._delegate), ___r1 == null ? null : (___r1.isa.method_msgSend["subStepsDidLoad:subStepsDidChange:"] || _objj_forward)(___r1, (self._delegate.isa.method_dtable["subStepsDidLoad:subStepsDidChange:"], self._delegate.isa.method_dtable["subStepsDidLoad:subStepsDidChange:"], "subStepsDidLoad:subStepsDidChange:"), self._subStepsArray, subStepsDidChange));
            break;
    }
    var ___r1, ___r2;
}

,["void","CPURLConnection","CPString"])]);
}
p;23;StepsWindowController.jt;18825;@STATIC;1.0;i;21;StepsDataController.ji;23;PopoverViewController.jt;18751;

objj_executeFile("StepsDataController.j", YES);objj_executeFile("PopoverViewController.j", YES);
{var the_class = objj_allocateClassPair(CPWindowController, "StepsWindowController"),
meta_class = the_class.isa;class_addIvars(the_class, [new objj_ivar("_tableViewForSteps", "CPTableView"), new objj_ivar("_popoverTableView", "CPTableView"), new objj_ivar("_popover", "CPPopover"), new objj_ivar("_tmpWindow", "CPWindow"), new objj_ivar("_popoverViewController", "CPViewController"), new objj_ivar("_stepsDataControllerForCurrentRecipe", "CPMutableArray"), new objj_ivar("_currentSubSteps", "CPMutableArray"), new objj_ivar("_stepsDataController", "StepsDataController"), new objj_ivar("_popoverSubViewController", "PopoverViewController"), new objj_ivar("_pathPrefix", "CPString"), new objj_ivar("_windowDidLoad", "BOOL")]);objj_registerClassPair(the_class);
class_addMethods(the_class, [new objj_method(sel_getUid("tableView"), function $StepsWindowController__tableView(self, _cmd)
{
    return self._tableViewForSteps;
}

,["CPTableView"]), new objj_method(sel_getUid("setTableView:"), function $StepsWindowController__setTableView_(self, _cmd, newValue)
{
    self._tableViewForSteps = newValue;
}

,["void","CPTableView"]), new objj_method(sel_getUid("currentSubSteps"), function $StepsWindowController__currentSubSteps(self, _cmd)
{
    return self._currentSubSteps;
}

,["CPMutableArray"]), new objj_method(sel_getUid("setCurrentSubSteps:"), function $StepsWindowController__setCurrentSubSteps_(self, _cmd, newValue)
{
    self._currentSubSteps = newValue;
}

,["void","CPMutableArray"]), new objj_method(sel_getUid("pathPrefix"), function $StepsWindowController__pathPrefix(self, _cmd)
{
    return self._pathPrefix;
}

,["CPString"]), new objj_method(sel_getUid("setPathPrefix:"), function $StepsWindowController__setPathPrefix_(self, _cmd, newValue)
{
    self._pathPrefix = newValue;
}

,["void","CPString"]), new objj_method(sel_getUid("initWithWindow:"), function $StepsWindowController__initWithWindow_(self, _cmd, window)
{
    self = (objj_getClass("StepsWindowController").super_class.method_dtable["initWithWindow:"] || _objj_forward)(self, "initWithWindow:", window);
    if (self)
    {
        self._stepsDataController = ((___r1 = (StepsDataController.isa.method_msgSend["alloc"] || _objj_forward)(StepsDataController, (StepsDataController.isa.method_dtable["alloc"], "alloc"))), ___r1 == null ? null : (___r1.isa.method_msgSend["init"] || _objj_forward)(___r1, "init"));
        ((___r1 = self._stepsDataController), ___r1 == null ? null : (___r1.isa.method_msgSend["setDelegate:"] || _objj_forward)(___r1, (self._stepsDataController.isa.method_dtable["setDelegate:"], "setDelegate:"), self));
        var notificationCenter = (CPNotificationCenter.isa.method_msgSend["defaultCenter"] || _objj_forward)(CPNotificationCenter, (CPNotificationCenter.isa.method_dtable["defaultCenter"], "defaultCenter"));
        (notificationCenter == null ? null : (notificationCenter.isa.method_msgSend["addObserver:selector:name:object:"] || _objj_forward)(notificationCenter, (notificationCenter.isa.method_dtable["addObserver:selector:name:object:"], notificationCenter.isa.method_dtable["addObserver:selector:name:object:"], notificationCenter.isa.method_dtable["addObserver:selector:name:object:"], notificationCenter.isa.method_dtable["addObserver:selector:name:object:"], "addObserver:selector:name:object:"), self, sel_getUid("terminatePopover"), "PopoverTermination", nil));
        var notificationCenter = (CPNotificationCenter.isa.method_msgSend["defaultCenter"] || _objj_forward)(CPNotificationCenter, (CPNotificationCenter.isa.method_dtable["defaultCenter"], "defaultCenter"));
        (notificationCenter == null ? null : (notificationCenter.isa.method_msgSend["addObserver:selector:name:object:"] || _objj_forward)(notificationCenter, (notificationCenter.isa.method_dtable["addObserver:selector:name:object:"], notificationCenter.isa.method_dtable["addObserver:selector:name:object:"], notificationCenter.isa.method_dtable["addObserver:selector:name:object:"], notificationCenter.isa.method_dtable["addObserver:selector:name:object:"], "addObserver:selector:name:object:"), self, sel_getUid("selectTableRow:"), "SelectTableRow", nil));
    }
    return self;
    var ___r1;
}

,["id","CPWindow"]), new objj_method(sel_getUid("windowDidLoad"), function $StepsWindowController__windowDidLoad(self, _cmd)
{
    (objj_getClass("StepsWindowController").super_class.method_dtable["windowDidLoad"] || _objj_forward)(self, "windowDidLoad");
    if (!self._pathPrefix)
        self._pathPrefix = "";
    var stepsBundle = (CPBundle.isa.method_msgSend["bundleWithPath:"] || _objj_forward)(CPBundle, (CPBundle.isa.method_dtable["bundleWithPath:"], "bundleWithPath:"), self._pathPrefix + "Frameworks/MBSteps/");
    self._popoverSubViewController = ((___r1 = (PopoverViewController.isa.method_msgSend["alloc"] || _objj_forward)(PopoverViewController, (PopoverViewController.isa.method_dtable["alloc"], "alloc"))), ___r1 == null ? null : (___r1.isa.method_msgSend["initWithCibName:bundle:"] || _objj_forward)(___r1, "initWithCibName:bundle:", "PopoverView", stepsBundle));
    ((___r1 = self._popoverSubViewController), ___r1 == null ? null : (___r1.isa.method_msgSend["setStepsBundle:"] || _objj_forward)(___r1, (self._popoverSubViewController.isa.method_dtable["setStepsBundle:"], "setStepsBundle:"), stepsBundle));
    ((___r1 = ((___r2 = self._popoverSubViewController), ___r2 == null ? null : (___r2.isa.method_msgSend["view"] || _objj_forward)(___r2, (self._popoverSubViewController.isa.method_dtable["view"], "view")))), ___r1 == null ? null : (___r1.isa.method_msgSend["setFrameSize:"] || _objj_forward)(___r1, "setFrameSize:", ((___r2 = ((___r3 = self._popoverViewController), ___r3 == null ? null : (___r3.isa.method_msgSend["view"] || _objj_forward)(___r3, (self._popoverViewController.isa.method_dtable["view"], "view")))), ___r2 == null ? null : (___r2.isa.method_msgSend["frameSize"] || _objj_forward)(___r2, "frameSize"))));
    ((___r1 = ((___r2 = self._popoverViewController), ___r2 == null ? null : (___r2.isa.method_msgSend["view"] || _objj_forward)(___r2, (self._popoverViewController.isa.method_dtable["view"], "view")))), ___r1 == null ? null : (___r1.isa.method_msgSend["addSubview:"] || _objj_forward)(___r1, "addSubview:", ((___r2 = self._popoverSubViewController), ___r2 == null ? null : (___r2.isa.method_msgSend["view"] || _objj_forward)(___r2, (self._popoverSubViewController.isa.method_dtable["view"], "view")))));
    console.info(((___r1 = (self.isa.method_msgSend["window"] || _objj_forward)(self, (self.isa.method_dtable["window"], "window"))), ___r1 == null ? null : (___r1.isa.method_msgSend["frame"] || _objj_forward)(___r1, "frame")));
    console.info(((___r1 = ((___r2 = self._stepsDataController), ___r2 == null ? null : (___r2.isa.method_msgSend["state"] || _objj_forward)(___r2, (self._stepsDataController.isa.method_dtable["state"], "state")))), ___r1 == null ? null : (___r1.isa.method_msgSend["windowLocation"] || _objj_forward)(___r1, "windowLocation")));
    if (((___r1 = ((___r2 = self._stepsDataController), ___r2 == null ? null : (___r2.isa.method_msgSend["state"] || _objj_forward)(___r2, (self._stepsDataController.isa.method_dtable["state"], "state")))), ___r1 == null ? null : (___r1.isa.method_msgSend["windowLocation"] || _objj_forward)(___r1, "windowLocation")))
    {
        var windowFrame = ((___r1 = (self.isa.method_msgSend["window"] || _objj_forward)(self, (self.isa.method_dtable["window"], "window"))), ___r1 == null ? null : (___r1.isa.method_msgSend["frame"] || _objj_forward)(___r1, "frame"));
        windowFrame.origin = ((___r1 = ((___r2 = self._stepsDataController), ___r2 == null ? null : (___r2.isa.method_msgSend["state"] || _objj_forward)(___r2, (self._stepsDataController.isa.method_dtable["state"], "state")))), ___r1 == null ? null : (___r1.isa.method_msgSend["windowLocation"] || _objj_forward)(___r1, "windowLocation"));
        ((___r1 = (self.isa.method_msgSend["window"] || _objj_forward)(self, (self.isa.method_dtable["window"], "window"))), ___r1 == null ? null : (___r1.isa.method_msgSend["setFrame:"] || _objj_forward)(___r1, "setFrame:", windowFrame));
    }
    self._windowDidLoad = YES;
    var ___r1, ___r2, ___r3;
}

,["void"]), new objj_method(sel_getUid("terminatePopover"), function $StepsWindowController__terminatePopover(self, _cmd)
{
    ((___r1 = self._popover), ___r1 == null ? null : (___r1.isa.method_msgSend["close"] || _objj_forward)(___r1, (self._popover.isa.method_dtable["close"], "close")));
    ((___r1 = self._tableViewForSteps), ___r1 == null ? null : (___r1.isa.method_msgSend["deselectAll"] || _objj_forward)(___r1, (self._tableViewForSteps.isa.method_dtable["deselectAll"], "deselectAll")));
    var ___r1;
}

,["void"]), new objj_method(sel_getUid("selectTableRow:"), function $StepsWindowController__selectTableRow_(self, _cmd, notification)
{
    var rowNumberToBeSelected = (notification == null ? null : (notification.isa.method_msgSend["object"] || _objj_forward)(notification, (notification.isa.method_dtable["object"], "object")));
    var indexSet = (CPIndexSet.isa.method_msgSend["indexSetWithIndex:"] || _objj_forward)(CPIndexSet, (CPIndexSet.isa.method_dtable["indexSetWithIndex:"], "indexSetWithIndex:"), rowNumberToBeSelected);
    ((___r1 = self._tableViewForSteps), ___r1 == null ? null : (___r1.isa.method_msgSend["selectRowIndexes:byExtendingSelection:"] || _objj_forward)(___r1, (self._tableViewForSteps.isa.method_dtable["selectRowIndexes:byExtendingSelection:"], self._tableViewForSteps.isa.method_dtable["selectRowIndexes:byExtendingSelection:"], "selectRowIndexes:byExtendingSelection:"), indexSet, NO));
    var ___r1;
}

,["void","CPNotification"]), new objj_method(sel_getUid("mainStepsDidLoad:"), function $StepsWindowController__mainStepsDidLoad_(self, _cmd, mainStepsArray)
{
    ((___r1 = self._tableViewForSteps), ___r1 == null ? null : (___r1.isa.method_msgSend["reloadData"] || _objj_forward)(___r1, (self._tableViewForSteps.isa.method_dtable["reloadData"], "reloadData")));
    var ___r1;
}

,["void","CPArray"]), new objj_method(sel_getUid("subStepsDidLoad:subStepsDidChange:"), function $StepsWindowController__subStepsDidLoad_subStepsDidChange_(self, _cmd, subStepsArray, subStepsDidChange)
{
    ((___r1 = self._popoverSubViewController), ___r1 == null ? null : (___r1.isa.method_msgSend["setTableDataArray:"] || _objj_forward)(___r1, (self._popoverSubViewController.isa.method_dtable["setTableDataArray:"], "setTableDataArray:"), subStepsArray));
    ((___r1 = self._popoverSubViewController), ___r1 == null ? null : (___r1.isa.method_msgSend["setBaseURL:"] || _objj_forward)(___r1, (self._popoverSubViewController.isa.method_dtable["setBaseURL:"], "setBaseURL:"), ((___r2 = self._stepsDataController), ___r2 == null ? null : (___r2.isa.method_msgSend["baseURLForRow:"] || _objj_forward)(___r2, (self._stepsDataController.isa.method_dtable["baseURLForRow:"], "baseURLForRow:"), ((___r3 = self._tableViewForSteps), ___r3 == null ? null : (___r3.isa.method_msgSend["selectedRow"] || _objj_forward)(___r3, (self._tableViewForSteps.isa.method_dtable["selectedRow"], "selectedRow")))))));
    var rowNo = ((___r1 = self._tableViewForSteps), ___r1 == null ? null : (___r1.isa.method_msgSend["selectedRow"] || _objj_forward)(___r1, (self._tableViewForSteps.isa.method_dtable["selectedRow"], "selectedRow")));
    console.info("subStepsDidChange: ", subStepsDidChange);
    var rowView = ((___r1 = self._tableViewForSteps), ___r1 == null ? null : (___r1.isa.method_msgSend["viewAtColumn:row:makeIfNecessary:"] || _objj_forward)(___r1, (self._tableViewForSteps.isa.method_dtable["viewAtColumn:row:makeIfNecessary:"], self._tableViewForSteps.isa.method_dtable["viewAtColumn:row:makeIfNecessary:"], self._tableViewForSteps.isa.method_dtable["viewAtColumn:row:makeIfNecessary:"], "viewAtColumn:row:makeIfNecessary:"), 0, rowNo, NO));
    ((___r1 = self._popover), ___r1 == null ? null : (___r1.isa.method_msgSend["showRelativeToRect:ofView:preferredEdge:"] || _objj_forward)(___r1, (self._popover.isa.method_dtable["showRelativeToRect:ofView:preferredEdge:"], self._popover.isa.method_dtable["showRelativeToRect:ofView:preferredEdge:"], self._popover.isa.method_dtable["showRelativeToRect:ofView:preferredEdge:"], "showRelativeToRect:ofView:preferredEdge:"), (rowView == null ? null : (rowView.isa.method_msgSend["bounds"] || _objj_forward)(rowView, (rowView.isa.method_dtable["bounds"], "bounds"))), rowView, CPMaxXEdge));
    ((___r1 = self._popoverSubViewController), ___r1 == null ? null : (___r1.isa.method_msgSend["setSubStepsDidChange:"] || _objj_forward)(___r1, (self._popoverSubViewController.isa.method_dtable["setSubStepsDidChange:"], "setSubStepsDidChange:"), subStepsDidChange));
    ((___r1 = self._popoverSubViewController), ___r1 == null ? null : (___r1.isa.method_msgSend["tableReloadDataForMainStepRow:"] || _objj_forward)(___r1, (self._popoverSubViewController.isa.method_dtable["tableReloadDataForMainStepRow:"], "tableReloadDataForMainStepRow:"), rowNo));
    ((___r1 = (self.isa.method_msgSend["window"] || _objj_forward)(self, (self.isa.method_dtable["window"], "window"))), ___r1 == null ? null : (___r1.isa.method_msgSend["becomeKeyWindow"] || _objj_forward)(___r1, "becomeKeyWindow"));
    var ___r1, ___r2, ___r3;
}

,["void","CPArray","BOOL"]), new objj_method(sel_getUid("numberOfRowsInTableView:"), function $StepsWindowController__numberOfRowsInTableView_(self, _cmd, tableView)
{
    return ((___r1 = ((___r2 = self._stepsDataController), ___r2 == null ? null : (___r2.isa.method_msgSend["tableDataArray"] || _objj_forward)(___r2, (self._stepsDataController.isa.method_dtable["tableDataArray"], "tableDataArray")))), ___r1 == null ? null : (___r1.isa.method_msgSend["count"] || _objj_forward)(___r1, "count"));
    var ___r1, ___r2;
}

,["CPInteger","CPTableView"]), new objj_method(sel_getUid("tableView:objectValueForTableColumn:row:"), function $StepsWindowController__tableView_objectValueForTableColumn_row_(self, _cmd, table, column, rowIndex)
{
    var rowData = ((___r1 = ((___r2 = self._stepsDataController), ___r2 == null ? null : (___r2.isa.method_msgSend["tableDataArray"] || _objj_forward)(___r2, (self._stepsDataController.isa.method_dtable["tableDataArray"], "tableDataArray")))), ___r1 == null ? null : (___r1.isa.method_msgSend["objectAtIndex:"] || _objj_forward)(___r1, "objectAtIndex:", rowIndex));
    return (CPString.isa.method_msgSend["stringWithFormat:"] || _objj_forward)(CPString, (CPString.isa.method_dtable["stringWithFormat:"], "stringWithFormat:"), "%d. ", rowIndex + 1) + (rowData == null ? null : (rowData.isa.method_msgSend["valueForKey:"] || _objj_forward)(rowData, (rowData.isa.method_dtable["valueForKey:"], "valueForKey:"), (column == null ? null : (column.isa.method_msgSend["identifier"] || _objj_forward)(column, (column.isa.method_dtable["identifier"], "identifier")))));
    var ___r1, ___r2;
}

,["id","CPTableView","CPTableColumn","CPInteger"]), new objj_method(sel_getUid("tableViewSelectionDidChange:"), function $StepsWindowController__tableViewSelectionDidChange_(self, _cmd, notification)
{
    var timestamp;
    if (((___r1 = (notification == null ? null : (notification.isa.method_msgSend["object"] || _objj_forward)(notification, (notification.isa.method_dtable["object"], "object")))), ___r1 == null ? null : (___r1.isa.method_msgSend["selectedRow"] || _objj_forward)(___r1, "selectedRow")) != -1)
    {
        var rowIndex = ((___r1 = (notification == null ? null : (notification.isa.method_msgSend["object"] || _objj_forward)(notification, (notification.isa.method_dtable["object"], "object")))), ___r1 == null ? null : (___r1.isa.method_msgSend["selectedRow"] || _objj_forward)(___r1, "selectedRow"));
        ((___r1 = self._stepsDataController), ___r1 == null ? null : (___r1.isa.method_msgSend["downloadSubStepsForMainStepRow:"] || _objj_forward)(___r1, (self._stepsDataController.isa.method_dtable["downloadSubStepsForMainStepRow:"], "downloadSubStepsForMainStepRow:"), rowIndex));
        timestamp = ((___r1 = ((___r2 = ((___r3 = self._stepsDataController), ___r3 == null ? null : (___r3.isa.method_msgSend["tableDataArray"] || _objj_forward)(___r3, (self._stepsDataController.isa.method_dtable["tableDataArray"], "tableDataArray")))), ___r2 == null ? null : (___r2.isa.method_msgSend["objectAtIndex:"] || _objj_forward)(___r2, "objectAtIndex:", rowIndex))), ___r1 == null ? null : (___r1.isa.method_msgSend["valueForKey:"] || _objj_forward)(___r1, "valueForKey:", "timestamp"));
    }
    else
    {
        timestamp = -1;
    }
    ((___r1 = ((___r2 = self._stepsDataController), ___r2 == null ? null : (___r2.isa.method_msgSend["state"] || _objj_forward)(___r2, (self._stepsDataController.isa.method_dtable["state"], "state")))), ___r1 == null ? null : (___r1.isa.method_msgSend["setCurrentMainStepTimestamp:"] || _objj_forward)(___r1, "setCurrentMainStepTimestamp:", timestamp));
    ((___r1 = self._stepsDataController), ___r1 == null ? null : (___r1.isa.method_msgSend["saveState"] || _objj_forward)(___r1, (self._stepsDataController.isa.method_dtable["saveState"], "saveState")));
    var ___r1, ___r2, ___r3;
}

,["void","CPNotification"]), new objj_method(sel_getUid("popoverWillClose:"), function $StepsWindowController__popoverWillClose_(self, _cmd, popover)
{
    ((___r1 = self._tableViewForSteps), ___r1 == null ? null : (___r1.isa.method_msgSend["deselectAll"] || _objj_forward)(___r1, (self._tableViewForSteps.isa.method_dtable["deselectAll"], "deselectAll")));
    var ___r1;
}

,["void","CPPopover"]), new objj_method(sel_getUid("windowDidMove:"), function $StepsWindowController__windowDidMove_(self, _cmd, notification)
{
    if (self._windowDidLoad)
    {
        var currentLocation = ((___r1 = (notification == null ? null : (notification.isa.method_msgSend["object"] || _objj_forward)(notification, (notification.isa.method_dtable["object"], "object")))), ___r1 == null ? null : (___r1.isa.method_msgSend["frame"] || _objj_forward)(___r1, "frame")).origin;
        ((___r1 = ((___r2 = self._stepsDataController), ___r2 == null ? null : (___r2.isa.method_msgSend["state"] || _objj_forward)(___r2, (self._stepsDataController.isa.method_dtable["state"], "state")))), ___r1 == null ? null : (___r1.isa.method_msgSend["setWindowLocation:"] || _objj_forward)(___r1, "setWindowLocation:", currentLocation));
        ((___r1 = self._stepsDataController), ___r1 == null ? null : (___r1.isa.method_msgSend["saveState"] || _objj_forward)(___r1, (self._stepsDataController.isa.method_dtable["saveState"], "saveState")));
    }
    var ___r1, ___r2;
}

,["void","CPNotification"])]);
}
e;