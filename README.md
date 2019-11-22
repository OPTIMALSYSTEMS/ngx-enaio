# ngx-enaio

_An Angular layer for the enaio rest services_

**Alpha Version**

This version is incomplete and currently not suitable for productive use.

## Current Scope of Implementation

### AppConnector (OSRest)
#### CoreService
[Official Documentation](https://help.optimal-systems.com/enaio_develop/pages/viewpage.action?pageId=1868194)

| Method           | Status  | Priority |
|:-------------| -----:| -----:|
| /session | __implemented__ | **high** |
| /session/login | open | low |
| /session/logout | open | low |
| /session/checkPassword | open | low |
| /session/changePassword | open | low |
| /session/checklicense/[lizenzmodul] | open | low |
| /session/runscript | open | low |
| /session/systemroles | __implemented__ | **high** |
| /session/userdesktops | open | low |
| /session/userdesktops/add | open | low |
| /session/userdesktops/remove | open | low |
| /session/userdesktops/save | open | low |
| /session/settings/load | __implemented__ | **high** |
| /session/settings/custom/load | open | low |
| /session/settings/custom/save | open | low |

#### SessionService
[Official Documentation](https://help.optimal-systems.com/enaio_develop/pages/viewpage.action?pageId=1867869)

| Method           | Status  | Priority |
|:-------------| -----:| -----:|
| /core/emptyJob | open | low |


#### DocumentFileService
[Official Documentation](https://help.optimal-systems.com/enaio_develop/pages/viewpage.action?pageId=1867853)

| Method           | Status  | Priority |
|:-------------| -----:| -----:|
| /documentfiles/[id] | open | *low* |
| /documentfiles/[id]/[page] | open | **high** |
| /documentfiles/[id]/pdf | open | **high** |
| /documentfiles/[id]/zip | open | *low* |
| /documentfiles/zip | open | *low* |
| /documentfiles/[id]/osfile | open | *low* |
| /documentfiles/addtotray| open | *low* |
| /documentfiles/move/[id]| open | **high** |
| /documentfiles/move | open | **high** |
| /documentfiles/droptargets | open | **high** |
| /documentfiles/droptargets/[targetname] | open | **high** |
| /documentfiles/delete | open | **high** |
| /documentfiles/delete/[id] | open | **high** |
| /documentfiles/update/[id] | open | **high** |
| /documentfiles/processmetadata/[id] | open | *low* |
| /documentfiles/processmetadata/[objectTypeId] | open | *low* |
| /documentfiles/checkout/[id] | open | **high** |
| /documentfiles/checkout/undo/[id] | open | **high** |
| /documentfiles/checkout/ | open | **high** |

#### DocumentService
[Official Documentation](https://help.optimal-systems.com/enaio_develop/pages/viewpage.action?pageId=1867855)

| Method           | Status  | Priority |
|:-------------| -----:| -----:|
| __Object Definition__ | | |
| /documents | open | *low* |
| /documents/cabinets | open | *low* |
| /documents/cabinets/[Schrank] | open | *low* |
| __StoredQueries__ | | |
| /documents/storedqueries | __implemented__ | **high** |
| /documents/storedqueries/[id] | __implemented__ | **high** |
| /documents/storedqueries/add | open | *low* |
| __Search__ | | |
| /documents/search | __implemented__ | **high** |
| /documents/search/[id] | __implemented__ | **high** |
| /documents/search/ids | open | *low* |
| /documents/tray | open | *low* |
| /documents/[id] | open | *low* |
| /documents/parent/[id] | open | *low* |
| /documents/parents/[id] | __implemented__ | **high** |
| /documents/objectHierarchy/[id] | open | *low* |
| /documents/childrenHierarchy/[id] | open | *low* |
| /documents/explore/[id] | open | *low* |
| /documents/explore | open | *low* |
| /documents/baseparams/[id] | open | *low* |
| __Variants__ | | |
| /documents/variants/[id] | open | *low* |
| /documents/variants/setactive/[id] | open | *low* |
| /documents/variants/create/[originid] | open | *low* |
| __Object Relations__ | | |
| /documents/insertables/[locationId] | open | *low* |
| /documents/settype/[objectId] | open | *low* |
| __Insert / Update / Archive__ | | |
| /documents/insert/[locationId] | __implemented__ | **high** |
| /documents/update/[id] | __implemented__ | **high** |
| /documents/archive/[id] | open | *low* |
| /documents/archive | open | *low* |
| __Fulltext__ | | |
| /documents/vtx?query=[Suchbegriff] | open | *low* |
| /documents/vtx | open | *low* |
| /documents/vtx/autocomplete/[term] | open | *low* |
| /documents/vtx/autocomplete | open | *low* |
| __History__ | | |
| /documents/history/[id] | open | **high** |
| __Notes__ | | |
| /documents/notes/[id] | open | *low* |
| /documents/notes/remove/[id]/[noteId] | open | *low* |
| /documents/notes/update/[id] | open | *low* |
| __Portfolio__ | | |
| /documents/portfolios | open | *low* |
| /documents/portfolio/[id] | open | *low* |
| /documents/portfolio/{id}/add/{docid} | open | *low* |
| /documents/portfolio/{id}/remove/{docid} | open | *low* |
| __Favourites__ | | |
| /documents/favourites | open | *low* |
| /documents/favourites/count | open | *low* |
| /documents/favourites/add | open | *low* |
| /documents/favourites/add/[id] | open | *low* |
| /documents/favourites/delete/[id] | open | *low* |
| __Annotations__ | | |
| /documents/annotations/[objectId] | open | *low* |
| /documents/annotations | open | *low* |
| /documents/annotations/delete/[objectId] | open | *low* |
| /documents/annotations/pdf/[objectId] | open | *low* |
| __Templates__ | | |
| /documents/templates | open | *low* |
| /documents/templates/[objectTypeId] | open | *low* |
| /templates/acquisition | open | *low* |
| __Scripts__ | | |
| /documents/scripts | open | **high** |
| __Permissions__ | | |
| /documents/getpermissions | open | *low* |

#### IconService
[Official Documentation](https://help.optimal-systems.com/enaio_develop/pages/viewpage.action?pageId=1867857)

| Method           | Status  | Priority |
|:-------------| -----:| -----:|
| /icon/preload | open | *low* |
| /icon/ids | open | *low* |
| /icon/[id] | open | *low* |

#### NotificationService
[Official Documentation](https://help.optimal-systems.com/enaio_develop/pages/viewpage.action?pageId=1867859)

| Method           | Status  | Priority |
|:-------------| -----:| -----:|
| /notifications | open | *low* |
| /notifications/revisits | open | *low* |
| /notifications/subscriptions | open | *low* |
| /notifications/revisits/remove/{id}/{eventDate} | open | *low* |
| /notifications/revisits/remove | open | *low* |
| /notifications/revisits/markread/{id}/{eventDate} | open | *low* |
| /notifications/revisits/markread | open | *low* |
| /notifications/revisits/process/{id}/{eventDate} | open | *low* |
| /notifications/revisits/process | open | *low* |
| /notifications/subscriptions/remove/{id}/{eventDate} | open | *low* |
| /notifications/subscriptions/remove | open | *low* |
| /notifications/subscriptions/markread/{id}/{eventDate} | open | *low* |
| /notifications/subscriptions/markread | open | *low* |
| /notifications/subscriptions/process/{id}/{eventDate} | open | *low* |
| /notifications/subscriptions/process | open | *low* |
| /notifications/subscriptionQueries | open | *low* |
| /notifications/subscriptionObjects | open | *low* |
| /notifications/subscriptionObjects/{id} | open | *low* |
| /notifications/subscriptionObjects | open | *low* |
| /notifications/aboGroup/{id} | open | *low* |
| /notifications/subscriptionMultiObjects | open | *low* |
| /notifications/subscriptionObjects/delete/{id} | open | *low* |
| /notifications/subscriptionObjects/delete | open | *low* |
| /notifications/revisitObjects | open | *low* |
| /notifications/revisitObjects/{id} | open | *low* |
| /notifications/revisitObjects | open | *low* |
| /notifications/revisitMultiObjects | open | *low* |
| /notifications/revisitObjects/delete/{id}?userId=X&dueDate=Y | open | *low* |
| /notifications/revisitObjects/delete | open | *low* |
| /notifications/workflows | open | *low* |
| /notifications/count | open | *low* |




#### ObjDefService
[Official Documentation](https://help.optimal-systems.com/enaio_develop/pages/viewpage.action?pageId=1867861)

| Method           | Status  | Priority |
|:-------------| -----:| -----:|
| /objdef/global | open | *low* |
| /objdef/full | open | *low* |
| /objdef/languages | __implemented__ | *low* |
| /objdef/search/[id] | open | *low* |
| /objdef/search | open | *low* |

#### OrganizationService
[Official Documentation](https://help.optimal-systems.com/enaio_develop/pages/viewpage.action?pageId=1867863)

| Method           | Status  | Priority |
|:-------------| -----:| -----:|
| /organization/users | open | *low* |
| /organization/groups | open | *low* |
| /organization/sendmail | open | *low* |
| /organization/avatar/{username} | open | *low* |
| /organization/avatar/{username}/{size} | open | *low* |
| /organization/user/updateCreate | open | *low* |
| /organization/user/delete/{id} | open | *low* |
| /organization/securitysystem | open | *low* |

#### OSFileService
[Official Documentation](https://help.optimal-systems.com/enaio_develop/pages/viewpage.action?pageId=1867865)

| Method           | Status  | Priority |
|:-------------| -----:| -----:|
| /anon/osfile/[id] | open | *low* |

#### ServiceInfoService
[Official Documentation](https://help.optimal-systems.com/enaio_develop/pages/viewpage.action?pageId=1867867)

| Method           | Status  | Priority |
|:-------------| -----:| -----:|
| /serviceinfo | open | *low* |
| /serviceinfo/counter/{guid} | open | *low* |
| /serviceinfo/ping | open | *low* |
| /serviceinfo/mimetypes | open | *low* |
| /serviceinfo/errorTypes/ | open | *low* |
| /serviceinfo/errorTypes/{errorCode} | open | *low* |
| /serviceinfo/registry | open | *low* |
| /serviceinfo/etc | open | *low* |
| /serviceinfo/systemConfigValue | open | *low* |

#### WorkflowService
[Official Documentation](https://help.optimal-systems.com/enaio_develop/pages/viewpage.action?pageId=1867871)

| Method           | Status  | Priority |
|:-------------| -----:| -----:|
| /workflows | open | *low* |
| /workflows/start | open | *low* |
| /workflows/startWithData | open | *low* |
| /workflows/running | open | *low* |
| /workflows/running/full/[id] | open | *low* |
| /workflows/running/[id] | open | *low* |
| /workflows/running/processes | open | *low* |
| /workflows/running/processes/{processId}/{activityId} | open | *low* |
| /workflows/running/performers | open | *low* |
| /workflows/personalize | open | *low* |
| /workflows/depersonalize | open | *low* |
| /workflows/read | open | *low* |
| /workflows/unread | open | *low* |
| /workflows/assignperformers | open | *low* |
| /workflows/forward | open | *low* |
| /workflows/cancel | open | *low* |
| /workflows/processes/[Id] | open | *low* |
| /workflows/abort | open | *low* |
| /workflows/absence/[true - false] | open | *low* |
| /workflows/substitutes | open | *low* |
| /workflows/substitutes | open | *low* |
| /workflows/organisation | open | *low* |
| /workflows/organisationObjects | open | *low* |
| /workflows/organisationObjects | open | *low* |
| /workflows/clientScripts/[workflowId]/[activityId] | open | *low* |
| /workflows/adhoc/info | open | *low* |
| /workflows/adhoc/templates | open | *low* |
| /workflows/adhoc/templates/save | open | *low* |
| /workflows/adhoc/templates/delete/{id} | open | *low* |
| /workflows/adhoc/templates/move/{id}?publish=(true|false) | open | *low* |
