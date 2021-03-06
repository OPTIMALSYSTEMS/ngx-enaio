'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ngx-enaio - An Angular layer for the enaio rest services </a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/NgxEnaioModule.html" data-type="entity-link">NgxEnaioModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/EnaioDocumentService.html" data-type="entity-link">EnaioDocumentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EnaioServiceInfoService.html" data-type="entity-link">EnaioServiceInfoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EnaioSessionService.html" data-type="entity-link">EnaioSessionService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/EnaioDocumentObject.html" data-type="entity-link">EnaioDocumentObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioDocumentObjectField.html" data-type="entity-link">EnaioDocumentObjectField</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioDocumentObjectRights.html" data-type="entity-link">EnaioDocumentObjectRights</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioDocumentObjectTable.html" data-type="entity-link">EnaioDocumentObjectTable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioDocumentObjectTableColumn.html" data-type="entity-link">EnaioDocumentObjectTableColumn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioDocumentObjectTableRow.html" data-type="entity-link">EnaioDocumentObjectTableRow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioDocumentObjectTypeValue.html" data-type="entity-link">EnaioDocumentObjectTypeValue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioDocumentObjectVariant.html" data-type="entity-link">EnaioDocumentObjectVariant</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioDocumentObjectVariantInformation.html" data-type="entity-link">EnaioDocumentObjectVariantInformation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioDocumentSearchOptions.html" data-type="entity-link">EnaioDocumentSearchOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioDocumentSearchQuery.html" data-type="entity-link">EnaioDocumentSearchQuery</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioDocumentSearchRequest.html" data-type="entity-link">EnaioDocumentSearchRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioDocumentSearchRequestBaseparams.html" data-type="entity-link">EnaioDocumentSearchRequestBaseparams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioDocumentSearchRequestColumn.html" data-type="entity-link">EnaioDocumentSearchRequestColumn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioDocumentSearchRequestField.html" data-type="entity-link">EnaioDocumentSearchRequestField</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioDocumentSearchRequestFields.html" data-type="entity-link">EnaioDocumentSearchRequestFields</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioDocumentSearchRequestResult.html" data-type="entity-link">EnaioDocumentSearchRequestResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioDocumentSearchRequestSchema.html" data-type="entity-link">EnaioDocumentSearchRequestSchema</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioDocumentStoredQueriesOptions.html" data-type="entity-link">EnaioDocumentStoredQueriesOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioErrorType.html" data-type="entity-link">EnaioErrorType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioServiceInfo.html" data-type="entity-link">EnaioServiceInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioServiceInfoCapabilities.html" data-type="entity-link">EnaioServiceInfoCapabilities</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioServiceInfoCapability.html" data-type="entity-link">EnaioServiceInfoCapability</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioServiceInfoServices.html" data-type="entity-link">EnaioServiceInfoServices</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioSession.html" data-type="entity-link">EnaioSession</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioStoredQueries.html" data-type="entity-link">EnaioStoredQueries</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioStoredQuery.html" data-type="entity-link">EnaioStoredQuery</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnaioStoredQueryParam.html" data-type="entity-link">EnaioStoredQueryParam</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});