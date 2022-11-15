<template>
    <div>
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Base UI</a></li>
                            <li class="breadcrumb-item active">Modals</li>
                        </ol>
                    </div>
                    <h4 class="page-title">Modals1111</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->

        <div class="row">
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Bootstrap Modals</h4>

                        <p class="text-muted font-14">
                            A rendered modal with header, body, and set of actions in the footer.
                        </p>

                        <ul class="nav nav-tabs nav-bordered mb-3" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#bs-modals-preview"
                                    data-bs-toggle="tab" aria-expanded="false" class="nav-link active"
                                    aria-selected="true" role="tab">
                                    Preview
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#bs-modals-code"
                                    data-bs-toggle="tab" aria-expanded="true" class="nav-link" aria-selected="false"
                                    tabindex="-1" role="tab">
                                    Code
                                </a>
                            </li>
                        </ul> <!-- end nav-->
                        <div class="tab-content">
                            <div class="tab-pane show active" id="bs-modals-preview" role="tabpanel">

                                <!-- Standard modal content -->
                                <div id="standard-modal" class="modal fade" tabindex="-1"
                                    aria-labelledby="standard-modalLabel" aria-hidden="true" style="display: none;">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title" id="standard-modalLabel">Modal Heading</h4>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <h6>Text in a modal</h6>
                                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                                <hr>
                                                <h6>Overflowing text to show scroll behavior</h6>
                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac
                                                    facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                                    consectetur ac, vestibulum
                                                    at eros.</p>
                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                                    Vivamus sagittis
                                                    lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                                    cursus magna, vel
                                                    scelerisque nisl consectetur et. Donec sed odio dui. Donec
                                                    ullamcorper nulla non metus
                                                    auctor fringilla.</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-light"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div><!-- /.modal-content -->
                                    </div><!-- /.modal-dialog -->
                                </div><!-- /.modal -->

                                <!--  Modal content for the Large example -->
                                <div class="modal fade" id="bs-example-modal-lg" tabindex="-1"
                                    aria-labelledby="myLargeModalLabel" style="display: none;" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title" id="myLargeModalLabel">Large modal</h4>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                ...
                                            </div>
                                        </div><!-- /.modal-content -->
                                    </div><!-- /.modal-dialog -->
                                </div><!-- /.modal -->

                                <div class="modal fade" id="bs-example-modal-sm" tabindex="-1" role="dialog"
                                    aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-sm">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title" id="mySmallModalLabel">Small modal</h4>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                ...
                                            </div>
                                        </div><!-- /.modal-content -->
                                    </div><!-- /.modal-dialog -->
                                </div><!-- /.modal -->

                                <!-- Full width modal content -->
                                <div id="full-width-modal" class="modal fade" tabindex="-1" role="dialog"
                                    aria-labelledby="fullWidthModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-full-width">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title" id="fullWidthModalLabel">Modal Heading</h4>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <h6>Text in a modal</h6>
                                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                                <hr>
                                                <h6>Overflowing text to show scroll behavior</h6>
                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac
                                                    facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                                    consectetur ac, vestibulum
                                                    at eros.</p>
                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                                    Vivamus sagittis
                                                    lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                                    cursus magna, vel
                                                    scelerisque nisl consectetur et. Donec sed odio dui. Donec
                                                    ullamcorper nulla non metus
                                                    auctor fringilla.</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-light"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div><!-- /.modal-content -->
                                    </div><!-- /.modal-dialog -->
                                </div><!-- /.modal -->

                                <!-- Long Content Scroll Modal -->
                                <div class="modal fade" id="scrollable-modal" tabindex="-1" role="dialog"
                                    aria-labelledby="scrollableModalTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-scrollable" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="scrollableModalTitle">Modal title</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac
                                                    facilisis in, egestas
                                                    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                                                    eros.</p>
                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                                    Vivamus sagittis
                                                    lacus vel augue
                                                    laoreet rutrum faucibus dolor auctor.</p>
                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                                    cursus magna, vel
                                                    scelerisque nisl
                                                    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                                                    metus auctor
                                                    fringilla.</p>
                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac
                                                    facilisis in, egestas
                                                    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                                                    eros.</p>
                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                                    Vivamus sagittis
                                                    lacus vel augue
                                                    laoreet rutrum faucibus dolor auctor.</p>
                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                                    cursus magna, vel
                                                    scelerisque nisl
                                                    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                                                    metus auctor
                                                    fringilla.</p>
                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac
                                                    facilisis in, egestas
                                                    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                                                    eros.</p>
                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                                    Vivamus sagittis
                                                    lacus vel augue
                                                    laoreet rutrum faucibus dolor auctor.</p>
                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                                    cursus magna, vel
                                                    scelerisque nisl
                                                    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                                                    metus auctor
                                                    fringilla.</p>
                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac
                                                    facilisis in, egestas
                                                    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                                                    eros.</p>
                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                                    Vivamus sagittis
                                                    lacus vel augue
                                                    laoreet rutrum faucibus dolor auctor.</p>
                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                                    cursus magna, vel
                                                    scelerisque nisl
                                                    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                                                    metus auctor
                                                    fringilla.</p>
                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac
                                                    facilisis in, egestas
                                                    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                                                    eros.</p>
                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                                    Vivamus sagittis
                                                    lacus vel augue
                                                    laoreet rutrum faucibus dolor auctor.</p>
                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                                    cursus magna, vel
                                                    scelerisque nisl
                                                    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                                                    metus auctor
                                                    fringilla.</p>
                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac
                                                    facilisis in, egestas
                                                    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                                                    eros.</p>
                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                                    Vivamus sagittis
                                                    lacus vel augue
                                                    laoreet rutrum faucibus dolor auctor.</p>
                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                                    cursus magna, vel
                                                    scelerisque nisl
                                                    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                                                    metus auctor
                                                    fringilla.</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div><!-- /.modal-content -->
                                    </div><!-- /.modal-dialog -->
                                </div><!-- /.modal -->

                                <div class="button-list">
                                    <!-- Standard  modal -->
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#standard-modal">Standard Modal</button>
                                    <!-- Large modal -->
                                    <button type="button" class="btn btn-info" data-bs-toggle="modal"
                                        data-bs-target="#bs-example-modal-lg">Large Modal</button>
                                    <!-- Small modal -->
                                    <button type="button" class="btn btn-success" data-bs-toggle="modal"
                                        data-bs-target="#bs-example-modal-sm">Small Modal</button>
                                    <!-- Full width modal -->
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#full-width-modal">Full Width Modal</button>
                                    <!-- Scrollable modal -->
                                    <button type="button" class="btn btn-secondary" data-bs-toggle="modal"
                                        data-bs-target="#scrollable-modal">Scrollable Modal</button>
                                </div>

                            </div> <!-- end preview-->

                            <div class="tab-pane" id="bs-modals-code" role="tabpanel">
                                <pre class="mb-0">                                                    <span class="html escape hljs xml"><span class="hljs-comment">&lt;!-- Standard modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#standard-modal"</span>&gt;</span>Standard Modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"standard-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"standard-modalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"standard-modalLabel"</span>&gt;</span>Modal Heading<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Large modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-info"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#bs-example-modal-lg"</span>&gt;</span>Large Modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"bs-example-modal-lg"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"myLargeModalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-lg"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"myLargeModalLabel"</span>&gt;</span>Large modal<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Small modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span>  <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-success"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#bs-example-modal-sm"</span>&gt;</span>Small Modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"bs-example-modal-sm"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"mySmallModalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-sm"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"mySmallModalLabel"</span>&gt;</span>Small modal<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Full width modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span>  <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#full-width-modal"</span>&gt;</span>Full width Modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"full-width-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"fullWidthModalLabel"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-full-width"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"fullWidthModalLabel"</span>&gt;</span>Modal Heading<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Scrollable modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span>  <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-secondary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#scrollable-modal"</span>&gt;</span>Scrollable Modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"scrollable-modal"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-labelledby</span>=<span class="hljs-string">"scrollableModalTitle"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-dialog-scrollable"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"document"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h5</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"scrollableModalTitle"</span>&gt;</span>Modal title<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-secondary"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span></span>
                                                </pre> <!-- end highlight-->
                            </div> <!-- end preview code-->
                        </div> <!-- end tab-content-->
                    </div> <!-- end card-body -->
                </div> <!-- end card-->
            </div> <!-- end col -->

            <div class="col-xl-6">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Modal with Pages</h4>
                        <p class="text-muted font-14">Examples of custom modals.</p>

                        <ul class="nav nav-tabs nav-bordered mb-3" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-pages-preview"
                                    data-bs-toggle="tab" aria-expanded="false" class="nav-link active"
                                    aria-selected="true" role="tab">
                                    Preview
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-pages-code"
                                    data-bs-toggle="tab" aria-expanded="true" class="nav-link" aria-selected="false"
                                    tabindex="-1" role="tab">
                                    Code
                                </a>
                            </li>
                        </ul> <!-- end nav-->
                        <div class="tab-content">
                            <div class="tab-pane show active" id="modal-pages-preview" role="tabpanel">
                                <!-- Signup modal content -->
                                <div id="signup-modal" class="modal fade" tabindex="-1" aria-hidden="true"
                                    style="display: none;">
                                    <div class="modal-dialog">
                                        <div class="modal-content">



                                            <div class="modal-body">
                                                <div class="auth-brand text-center mt-2 mb-4 position-relative top-0">
                                                    <a href="https://coderthemes.com/hyper_2/saas/index.html"
                                                        class="logo-dark">
                                                        <span><img src="@/assets/theme/img/logo-dark.png"
                                                                alt="dark logo" height="22"></span>
                                                    </a>
                                                    <a href="https://coderthemes.com/hyper_2/saas/index.html"
                                                        class="logo-light">
                                                        <span><img src="@/assets/theme/img/logo.png" alt="logo"
                                                                height="22"></span>
                                                    </a>
                                                </div>

                                                <form class="ps-3 pe-3"
                                                    action="https://coderthemes.com/hyper_2/saas/ui-modals.html#">

                                                    <div class="mb-3">
                                                        <label for="username" class="form-label">Name</label>
                                                        <input class="form-control" type="email" id="username"
                                                            required="" placeholder="Michael Zenaty">
                                                    </div>

                                                    <div class="mb-3">
                                                        <label for="emailaddress" class="form-label">Email
                                                            address</label>
                                                        <input class="form-control" type="email" id="emailaddress"
                                                            required="" placeholder="john@deo.com">
                                                    </div>

                                                    <div class="mb-3">
                                                        <label for="password" class="form-label">Password</label>
                                                        <input class="form-control" type="password" required=""
                                                            id="password" placeholder="Enter your password">
                                                    </div>

                                                    <div class="mb-3">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="customCheck1">
                                                            <label class="form-check-label" for="customCheck1">I accept
                                                                <a
                                                                    href="https://coderthemes.com/hyper_2/saas/ui-modals.html#">Terms
                                                                    and
                                                                    Conditions</a></label>
                                                        </div>
                                                    </div>

                                                    <div class="mb-3 text-center">
                                                        <button class="btn btn-primary" type="submit">Sign Up
                                                            Free</button>
                                                    </div>

                                                </form>

                                            </div>
                                        </div><!-- /.modal-content -->
                                    </div><!-- /.modal-dialog -->
                                </div><!-- /.modal -->


                                <!-- SignIn modal content -->
                                <div id="login-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-body">
                                                <div class="auth-brand text-center mt-2 mb-4 position-relative top-0">
                                                    <a href="https://coderthemes.com/hyper_2/saas/index.html"
                                                        class="logo-dark">
                                                        <span><img src="@/assets/theme/img/logo-dark.png"
                                                                alt="dark logo" height="22"></span>
                                                    </a>
                                                    <a href="https://coderthemes.com/hyper_2/saas/index.html"
                                                        class="logo-light">
                                                        <span><img src="@/assets/theme/img/logo.png" alt="logo"
                                                                height="22"></span>
                                                    </a>
                                                </div>

                                                <form action="https://coderthemes.com/hyper_2/saas/ui-modals.html#"
                                                    class="ps-3 pe-3">
                                                    <div class="mb-3">
                                                        <label for="emailaddress1" class="form-label">Email
                                                            address</label>
                                                        <input class="form-control" type="email" id="emailaddress1"
                                                            required="" placeholder="john@deo.com">
                                                    </div>

                                                    <div class="mb-3">
                                                        <label for="password1" class="form-label">Password</label>
                                                        <input class="form-control" type="password" required=""
                                                            id="password1" placeholder="Enter your password">
                                                    </div>

                                                    <div class="mb-3">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="customCheck2">
                                                            <label class="form-check-label" for="customCheck2">Remember
                                                                me</label>
                                                        </div>
                                                    </div>

                                                    <div class="mb-3 text-center">
                                                        <button class="btn rounded-pill btn-primary" type="submit">Sign
                                                            In</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div><!-- /.modal-content -->
                                    </div><!-- /.modal-dialog -->
                                </div><!-- /.modal -->

                                <div class="button-list">
                                    <!-- Sign Up modal -->
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#signup-modal">Sign Up Modal</button>
                                    <!-- Log In modal -->
                                    <button type="button" class="btn btn-info" data-bs-toggle="modal"
                                        data-bs-target="#login-modal">Log In Modal</button>
                                </div>
                            </div> <!-- end preview-->

                            <div class="tab-pane" id="modal-pages-code" role="tabpanel">
                                <pre class="mb-0">                                                    <span class="html escape hljs xml"><span class="hljs-comment">&lt;!-- Signup modal--&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#signup-modal"</span>&gt;</span>Sign Up Modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"signup-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center mt-2 mb-4"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"index.html"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-success"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"assets/images/logo-dark.png"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">""</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"18"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><br>                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>                <span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ps-3 pe-3"</span> <span class="hljs-attr">action</span>=<span class="hljs-string">"#"</span>&gt;</span><br><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-3"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"username"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-label"</span>&gt;</span>Name<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-control"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"username"</span> <span class="hljs-attr">required</span>=<span class="hljs-string">""</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Michael Zenaty"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-3"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"emailaddress"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-label"</span>&gt;</span>Email address<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-control"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"emailaddress"</span> <span class="hljs-attr">required</span>=<span class="hljs-string">""</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"john@deo.com"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-3"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-label"</span>&gt;</span>Password<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-control"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">required</span>=<span class="hljs-string">""</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Enter your password"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-3"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check"</span>&gt;</span><br>                            <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check-input"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"customCheck1"</span>&gt;</span><br>                            <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"customCheck1"</span>&gt;</span>I accept <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Terms and Conditions<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span> <br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-3 text-center"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span>&gt;</span>Sign Up Free<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>                <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span><br><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Login modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-info"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#login-modal"</span>&gt;</span>Log In Modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"login-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center mt-2 mb-4"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"index.html"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-success"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"assets/images/logo-dark.png"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">""</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"18"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><br>                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>                <span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">action</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ps-3 pe-3"</span>&gt;</span><br><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-3"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"emailaddress1"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-label"</span>&gt;</span>Email address<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-control"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"emailaddress1"</span> <span class="hljs-attr">required</span>=<span class="hljs-string">""</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"john@deo.com"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-3"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"password1"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-label"</span>&gt;</span>Password<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-control"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">required</span>=<span class="hljs-string">""</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"password1"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Enter your password"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-3"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check"</span>&gt;</span><br>                            <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check-input"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"customCheck2"</span>&gt;</span><br>                            <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"customCheck2"</span>&gt;</span>Remember me<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-3 text-center"</span>&gt;</span><br>                        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn rounded-pill btn-primary"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span>&gt;</span>Sign In<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>                <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span><br><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span></span>
                                                </pre> <!-- end highlight-->
                            </div> <!-- end preview code-->
                        </div> <!-- end tab-content-->
                    </div> <!-- end card-body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row -->

        <div class="row">
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Modal based Alerts</h4>
                        <p class="text-muted font-14">Show different contexual alert messages using modal component</p>

                        <ul class="nav nav-tabs nav-bordered mb-3" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-alerts-preview"
                                    data-bs-toggle="tab" aria-expanded="false" class="nav-link active"
                                    aria-selected="true" role="tab">
                                    Preview
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-alerts-code"
                                    data-bs-toggle="tab" aria-expanded="true" class="nav-link" aria-selected="false"
                                    tabindex="-1" role="tab">
                                    Code
                                </a>
                            </li>
                        </ul> <!-- end nav-->
                        <div class="tab-content">
                            <div class="tab-pane show active" id="modal-alerts-preview" role="tabpanel">
                                <!-- Success Alert Modal -->
                                <div id="success-alert-modal" class="modal fade" tabindex="-1" role="dialog"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-sm">
                                        <div class="modal-content modal-filled bg-success">
                                            <div class="modal-body p-4">
                                                <div class="text-center">
                                                    <i class="ri-check-line h1"></i>
                                                    <h4 class="mt-2">Well Done!</h4>
                                                    <p class="mt-3">Cras mattis consectetur purus sit amet fermentum.
                                                        Cras justo odio,
                                                        dapibus ac facilisis in, egestas eget quam.</p>
                                                    <button type="button" class="btn btn-light my-2"
                                                        data-bs-dismiss="modal">Continue</button>
                                                </div>
                                            </div>
                                        </div><!-- /.modal-content -->
                                    </div><!-- /.modal-dialog -->
                                </div><!-- /.modal -->

                                <!-- Info Alert Modal -->
                                <div id="info-alert-modal" class="modal fade" tabindex="-1" role="dialog"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-sm">
                                        <div class="modal-content">
                                            <div class="modal-body p-4">
                                                <div class="text-center">
                                                    <i class="ri-information-line h1 text-info"></i>
                                                    <h4 class="mt-2">Heads up!</h4>
                                                    <p class="mt-3">Cras mattis consectetur purus sit amet fermentum.
                                                        Cras justo odio,
                                                        dapibus ac facilisis in, egestas eget quam.</p>
                                                    <button type="button" class="btn btn-info my-2"
                                                        data-bs-dismiss="modal">Continue</button>
                                                </div>
                                            </div>
                                        </div><!-- /.modal-content -->
                                    </div><!-- /.modal-dialog -->
                                </div><!-- /.modal -->

                                <!-- Warning Alert Modal -->
                                <div id="warning-alert-modal" class="modal fade" tabindex="-1" role="dialog"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-sm">
                                        <div class="modal-content">
                                            <div class="modal-body p-4">
                                                <div class="text-center">
                                                    <i class="ri-alert-line h1 text-warning"></i>
                                                    <h4 class="mt-2">Incorrect Information</h4>
                                                    <p class="mt-3">Cras mattis consectetur purus sit amet fermentum.
                                                        Cras justo odio,
                                                        dapibus ac facilisis in, egestas eget quam.</p>
                                                    <button type="button" class="btn btn-warning my-2"
                                                        data-bs-dismiss="modal">Continue</button>
                                                </div>
                                            </div>
                                        </div><!-- /.modal-content -->
                                    </div><!-- /.modal-dialog -->
                                </div><!-- /.modal -->

                                <!-- Danger Alert Modal -->
                                <div id="danger-alert-modal" class="modal fade" tabindex="-1" role="dialog"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-sm">
                                        <div class="modal-content modal-filled bg-danger">
                                            <div class="modal-body p-4">
                                                <div class="text-center">
                                                    <i class="ri-close-circle-line h1"></i>
                                                    <h4 class="mt-2">Oh snap!</h4>
                                                    <p class="mt-3">Cras mattis consectetur purus sit amet fermentum.
                                                        Cras justo odio,
                                                        dapibus ac facilisis in, egestas eget quam.</p>
                                                    <button type="button" class="btn btn-light my-2"
                                                        data-bs-dismiss="modal">Continue</button>
                                                </div>
                                            </div>
                                        </div><!-- /.modal-content -->
                                    </div><!-- /.modal-dialog -->
                                </div><!-- /.modal -->

                                <div class="button-list">
                                    <!-- Success Alert modal -->
                                    <button type="button" class="btn btn-success" data-bs-toggle="modal"
                                        data-bs-target="#success-alert-modal">Success Alert</button>
                                    <!-- Info Alert modal -->
                                    <button type="button" class="btn btn-info" data-bs-toggle="modal"
                                        data-bs-target="#info-alert-modal">Info Alert</button>
                                    <!-- Warning Alert modal -->
                                    <button type="button" class="btn btn-warning" data-bs-toggle="modal"
                                        data-bs-target="#warning-alert-modal">Warning Alert</button>
                                    <!-- Danger Alert modal -->
                                    <button type="button" class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#danger-alert-modal">Danger Alert</button>
                                </div>

                            </div> <!-- end preview-->

                            <div class="tab-pane" id="modal-alerts-code" role="tabpanel">
                                <pre class="mb-0">                                                    <span class="html escape hljs xml"><span class="hljs-comment">&lt;!-- Success Alert Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-success"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#success-alert-modal"</span>&gt;</span>Success Alert<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"success-alert-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-sm"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content modal-filled bg-success"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body p-4"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ri-check-line h1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-2"</span>&gt;</span>Well Done!<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light my-2"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Continue<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Info Alert Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-info"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#info-alert-modal"</span>&gt;</span>Info Alert<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"info-alert-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-sm"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body p-4"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ri-information-line h1 text-info"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-2"</span>&gt;</span>Heads up!<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-info my-2"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Continue<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Warning Alert Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span>  <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-warning"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#warning-alert-modal"</span>&gt;</span>Warning Alert<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"warning-alert-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-sm"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body p-4"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ri-alert-line h1 text-warning"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-2"</span>&gt;</span>Incorrect Information<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-warning my-2"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Continue<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Danger Alert Modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span>  <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-danger"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#danger-alert-modal"</span>&gt;</span>Danger Alert<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"danger-alert-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-sm"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content modal-filled bg-danger"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body p-4"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center"</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ri-close-circle-line h1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-2"</span>&gt;</span>Oh snap!<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br>                    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light my-2"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Continue<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span></span>
                                                </pre> <!-- end highlight-->
                            </div> <!-- end preview code-->
                        </div> <!-- end tab-content-->
                    </div> <!-- end card-body -->
                </div> <!-- end card-->
            </div> <!-- end col -->

            <div class="col-xl-6">
                <div class="card">
                    <div class="card-body">
                        <h4 class="header-title">Modal Position</h4>
                        <p class="text-muted font-14">Specify the position for the modal. You can display modal at top,
                            bottom, center or right of page by specifying
                            classes <code>modal-top</code>, <code>modal-bottom</code>,
                            <code>modal-dialog-centered</code> and
                            <code>modal-right</code>
                            respectively.
                        </p>

                        <ul class="nav nav-tabs nav-bordered mb-3" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-position-preview"
                                    data-bs-toggle="tab" aria-expanded="false" class="nav-link active"
                                    aria-selected="true" role="tab">
                                    Preview
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a href="https://coderthemes.com/hyper_2/saas/ui-modals.html#modal-position-code"
                                    data-bs-toggle="tab" aria-expanded="true" class="nav-link" aria-selected="false"
                                    tabindex="-1" role="tab">
                                    Code
                                </a>
                            </li>
                        </ul> <!-- end nav-->
                        <div class="tab-content">
                            <div class="tab-pane show active" id="modal-position-preview" role="tabpanel">
                                <!-- Top modal content -->
                                <div id="top-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                                    <div class="modal-dialog modal-top">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title" id="topModalLabel">Modal Heading</h4>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <h5>Text in a modal</h5>
                                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-light"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div><!-- /.modal-content -->
                                    </div><!-- /.modal-dialog -->
                                </div><!-- /.modal -->

                                <!-- Right modal content -->
                                <div id="right-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                                    <div class="modal-dialog modal-sm modal-right">
                                        <div class="modal-content">
                                            <div class="modal-header border-0">
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="text-center">
                                                    <h4 class="mt-0">Text in a modal</h4>
                                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                                    </p>
                                                    <button type="button" class="btn btn-danger btn-sm"
                                                        data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div><!-- /.modal-content -->
                                    </div><!-- /.modal-dialog -->
                                </div><!-- /.modal -->

                                <!-- Bottom modal content -->
                                <div id="bottom-modal" class="modal fade" tabindex="-1" role="dialog"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-sm modal-bottom">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title" id="bottomModalLabel">Modal Heading</h4>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <h5>Text in a modal</h5>
                                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-light"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div><!-- /.modal-content -->
                                    </div><!-- /.modal-dialog -->
                                </div><!-- /.modal -->

                                <!-- Center modal content -->
                                <div class="modal fade" id="centermodal" tabindex="-1" role="dialog" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title" id="myCenterModalLabel">Center modal</h4>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <h5>Overflowing text to show scroll behavior</h5>
                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac
                                                    facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                                    consectetur ac, vestibulum
                                                    at eros.</p>
                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                                    Vivamus sagittis
                                                    lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                            </div>
                                        </div><!-- /.modal-content -->
                                    </div><!-- /.modal-dialog -->
                                </div><!-- /.modal -->

                                <div class="button-list">
                                    <!-- Top modal -->
                                    <button type="button" class="btn btn-secondary" data-bs-toggle="modal"
                                        data-bs-target="#top-modal">Top Modal</button>
                                    <!-- Bottom modal -->
                                    <button type="button" class="btn btn-secondary" data-bs-toggle="modal"
                                        data-bs-target="#bottom-modal">Bottom Modal</button>
                                    <!-- Center modal -->
                                    <button type="button" class="btn btn-secondary" data-bs-toggle="modal"
                                        data-bs-target="#centermodal">Center modal</button>
                                    <!-- Right modal -->
                                    <button type="button" class="btn btn-secondary" data-bs-toggle="modal"
                                        data-bs-target="#right-modal">Rightbar Modal</button>
                                </div>

                            </div> <!-- end preview-->

                            <div class="tab-pane" id="modal-position-code" role="tabpanel">
                                <pre class="mb-0">                                                    <span class="html escape hljs xml"><span class="hljs-comment">&lt;!-- Top modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-secondary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#top-modal"</span>&gt;</span>Top Modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"top-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-top"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"topModalLabel"</span>&gt;</span>Modal Heading<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Right modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-secondary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#right-modal"</span>&gt;</span>Rightbar Modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"right-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-sm modal-right"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header border-0"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center"</span>&gt;</span><br>                    ...<br>                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Bottom modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-secondary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#bottom-modal"</span>&gt;</span>Bottom Modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"bottom-modal"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-sm modal-bottom"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"bottomModalLabel"</span>&gt;</span>Modal Heading<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-footer"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-light"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span>&gt;</span>Save changes<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span><br><br><span class="hljs-comment">&lt;!-- Center modal --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-secondary"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">data-bs-target</span>=<span class="hljs-string">"#centermodal"</span>&gt;</span>Center modal<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal fade"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"centermodal"</span> <span class="hljs-attr">tabindex</span>=<span class="hljs-string">"-1"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"dialog"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-dialog modal-dialog-centered"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-content"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-header"</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"myCenterModalLabel"</span>&gt;</span>Center modal<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>                <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn-close"</span> <span class="hljs-attr">data-bs-dismiss</span>=<span class="hljs-string">"modal"</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"modal-body"</span>&gt;</span><br>                ...<br>            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-content --&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal-dialog --&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-comment">&lt;!-- /.modal --&gt;</span></span>
                                                </pre> <!-- end highlight-->
                            </div> <!-- end preview code-->
                        </div> <!-- end tab-content-->
                    </div> <!-- end card-body -->
                </div> <!-- end card-->
            </div> <!-- end col -->
        </div>
        <!-- end row -->
    </div>
</template>