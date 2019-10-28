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
| /documents/insert/[locationId] | open | **high** |
| /documents/update/[id] | open | **high** |
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
ToDo

#### ObjDefService
[Official Documentation](https://help.optimal-systems.com/enaio_develop/pages/viewpage.action?pageId=1867861)

| Method           | Status  | Priority |
|:-------------| -----:| -----:|
ToDo

#### OrganizationService
[Official Documentation](https://help.optimal-systems.com/enaio_develop/pages/viewpage.action?pageId=1867863)

| Method           | Status  | Priority |
|:-------------| -----:| -----:|
ToDo

#### OSFileService
[Official Documentation](https://help.optimal-systems.com/enaio_develop/pages/viewpage.action?pageId=1867865)

| Method           | Status  | Priority |
|:-------------| -----:| -----:|
ToDo

#### ServiceInfoService
[Official Documentation](https://help.optimal-systems.com/enaio_develop/pages/viewpage.action?pageId=1867867)

| Method           | Status  | Priority |
|:-------------| -----:| -----:|
ToDo

#### WorkflowService
[Official Documentation](https://help.optimal-systems.com/enaio_develop/pages/viewpage.action?pageId=1867871)

| Method           | Status  | Priority |
|:-------------| -----:| -----:|
ToDo
