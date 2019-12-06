let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
let failFast = require('protractor-fail-fast');

exports.config = {
  plugins: [failFast.init()],
  afterLaunch: function () {
    failFast.clean(); // Removes the fail file once all test runners have completed.
  },
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {

    // opt: [
    //   './todo-spec.js',     (poziva 'todo' fajl koji ne sluzi nicemu. to je samo primer)
    // ],

    login: [
      './private/account/login/login-spec.js'
    ],

    dashPage: [
      './private/dashboard/dashPage/dashPage-spec.js'
    ],

    loginAsVendor: [
      './private/dashboard/loginAsVendor/loginAsVendor-spec.js'
    ],

    dashComunity: [
      './private/dashboard/dashComunity/dashComunity-spec.js'
    ],

    dashLendwell: [
      './private/dashboard/dashLendwell/dashLendwell-spec.js'
    ],

    dashWorkspace: [
      './private/dashboard/dashWorkspace/dashWorkspace-spec.js'
    ],

    dashPeer: [
      './private/dashboard/dashPeerAnalysis/dashPeer-spec.js'
    ],

    dashRisk: [
      './private/dashboard/dashRiskAsses/dashRisk-spec.js'
    ],

    dashCielostar: [
      './private/dashboard/dashCielostar/dashCielostar-spec.js'
    ],

    dashEducation: [
      './private/dashboard/dashEducation/dashEducation-spec.js'
    ],

    dashVendorMng: [
      './private/dashboard/dashVendorMng/dashVendorMng-spec.js'
    ],

    dashCbancPremium: [
      './private/dashboard/dashCbancPremium/dashCbancPremium-spec.js'
    ],

    dashAbout: [
      './private/dashboard/dashAbout/dashAbout-spec.js'
    ],

    dashFAQ: [
      './private/dashboard/dashFAQ/dashFAQ-spec.js'
    ],

    dashContact: [
      './private/dashboard/dashContact/dashContact-spec.js'
    ],

    dashVendors: [
      './private/dashboard/dashVendors/dashVendors-spec.js'
    ],

    dashCareers: [
      './private/dashboard/dashCareers/dashCareers-spec.js'
    ],

    dashBlog: [
      './private/dashboard/dashBlog/dashBlog-spec.js'
    ],

    dashPrivacyPolicy: [
      './private/dashboard/dashPrivacyPolicy/dashPrivacyPolicy-spec.js'
    ],

    dashTermsOfService: [
      './private/dashboard/dashTermsOfService/dashTermsOfService-spec.js'
    ],

    dashCodeOfConduct: [
      './private/dashboard/dashCodeOfConduct/dashCodeOfConduct-spec.js'
    ],

    peerA: [
      './private/peer_analysis/peerGroupAnalysis/peerGroupAnalysis-spec.js'
    ],

    peerToolLunch: [
      './private/peer_analysis/peerToolLunch/peerToolLunch-spec.js'
    ],

    peerToolShortReport: [
      './private/peer_analysis/peerToolShortReport/peerToolShortReport-spec.js'
    ],

    peerToolReport: [
      './private/peer_analysis/peerToolReport/peerToolReport-spec.js'
    ],
    
    checkLinksOnFVHomePage: [
      './private/fileVault/checkLinksOnFVHomePage/checkLinksOnFVHomePage-spec.js',
    ],

    addSpace: [
      './private/fileVault/addSpace/addSpace-spec.js',
    ],

    addTask: [
      './private/fileVault/addTask/addTask-spec.js',
    ],

    addDoc: [
      './private/fileVault/addDoc/addDoc-spec.js',
    ],

    addUser: [
      './private/fileVault/addUser/addUser-spec.js',
    ],

    taskReport: [
      './private/fileVault/taskReport/taskReport-spec.js',
    ],

    allActivity: [
      './private/fileVault/allActivity/allActivity-spec.js',
    ],

    search: [
      './private/fileVault/search/search-spec.js',
    ],

    adminland: [
      './private/fileVault/adminland/adminland-spec.js',
    ],

    deleteSpace: [
      './private/fileVault/deleteSpace/deleteSpace-spec.js',
    ],

    general: [
      './private/account/general/general-spec.js',
    ],

    notifications: [
      './private/account/notifications/notifications-spec.js',
    ],

    avatar: [
      './private/account/avatar/avatar-spec.js',
    ],

    password: [
      './private/account/password/password-spec.js',
    ],

    alerts: [
      './private/account/alerts/alerts-spec.js',
    ],

    createDiscussion: [
      './private/community/createDiscussion/createDiscussion-spec.js'
    ],

    replyDiscussion: [
      './private/community/replyDiscussion/replyDiscussion-spec.js'
    ],

    commentDiscussion: [
      './private/community/commentDiscussion/commentDiscussion-spec.js'
    ],

    downloadDoc: [
      './private/community/downloadDoc/downloadDoc-spec.js'
    ],

    deleteDiscussion: [
      './private/community/deleteDiscussion/deleteDiscussion-spec.js'
    ],

    undoDeleteDiscussion: [
      './private/community/undoDeleteDiscussion/undoDeleteDiscussion-spec.js'
    ],

    searchForDiscussion: [
      './private/community/searchForDiscussion/searchForDiscussion-spec.js'
    ],

    createAnonymousDiscussion: [
      './private/community/createAnonymousDiscussion/createAnonymousDiscussion-spec.js'
    ],

    thankDiscussion: [
      './private/community/thankDiscussion/thankDiscussion-spec.js'
    ],

    searchVendors: [
      './private/community/searchVendors/searchVendors-spec.js'
    ],

    sendMessageToVendor: [
      './private/community/sendMessageToVendor/sendMessageToVendor-spec.js'
    ],

    searchTopic: [
      './private/community/searchTopic/searchTopic-spec.js'
    ],

    inviteColleagues: [
      './private/community/inviteColleagues/inviteColleagues-spec.js'
    ],

    searchDoc: [
      './private/community/searchDoc/searchDoc-spec.js'
    ],

    thankDoc: [
      './private/community/thankDoc/thankDoc-spec.js'
    ],

    reputationSystemAndLeaderboard: [
      './private/community/reputationSystemAndLeaderboard/reputationSystemAndLeaderboard-spec.js'
    ],

    sendFile: [
      './private/inbox/sendFile/sendFile-spec.js'
    ],

    sendMessage: [
      './private/inbox/sendMessage/sendMessage-spec.js'
    ],

    reportSpam: [
      './private/inbox/reportSpam/reportSpam-spec.js'
    ],

    downloadFile: [
      './private/inbox/downloadFile/downloadFile-spec.js'
    ],

    vm_add_vendor: [
      './private/vm/vm_add_vendor/vm_add_vendor-spec.js'
    ],

    vm_add_unverified_vendor: [
      './private/vm/vm_add_unverified_vendor/vm_add_unverified_vendor-spec.js'
    ],

    vm_upload_document: [
      './private/vm/vm_upload_document/vm_upload_document-spec.js'
    ],

    vm_add_task: [
      './private/vm/vm_add_task/vm_add_task-spec.js'
    ],

    vm_edit_task: [
      './private/vm/vm_edit_task/vm_edit_task-spec.js'
    ],

    vm_complete_task: [
      './private/vm/vm_complete_task/vm_complete_task-spec.js'
    ],

    vm_delete_task: [
      './private/vm/vm_delete_task/vm_delete_task-spec.js'
    ],

    vm_delete_doc: [
      './private/vm/vm_delete_doc/vm_delete_doc-spec.js'
    ],

    vm_report: [
      './private/vm/vm_report/vm_report-spec.js'
    ],

    vm_add_user: [
      './private/vm/vm_add_user/vm_add_user-spec.js'
    ],

    vm_remove_user: [
      './private/vm/vm_remove_user/vm_remove_user-spec.js'
    ],

    vm_remove_vendor: [
      './private/vm/vm_remove_vendor/vm_remove_vendor-spec.js'
    ],

    vm_remove_unverified_vendor: [
      './private/vm/vm_remove_unverified_vendor/vm_remove_unverified_vendor-spec.js'
    ],

    ra_home: [
      './private/ra_premium/ra_home/ra_home-spec.js'
    ],

    ra_drop_menu: [
      './private/ra_premium/ra_drop_menu/ra_drop_menu-spec.js'
    ],

    ra_go_to_legacy_app: [
      './private/ra_premium/ra_go_to_legacy_app/ra_go_to_legacy_app-spec.js'
    ],

    ra_create_inprogress_template: [
      './private/ra_premium/ra_create_inprogress_template/ra_create_inprogress_template-spec.js'
    ],

    ra_unsaved_changes_message: [
      './private/ra_premium/ra_unsaved_changes_message/ra_unsaved_changes_message-spec.js'
    ],

    ra_saved_changes_message: [
      './private/ra_premium/ra_saved_changes_message/ra_saved_changes_message-spec.js'
    ],

    ra_edit_inprogress_template: [
      './private/ra_premium/ra_edit_inprogress_template/ra_edit_inprogress_template-spec.js'
    ],

    ra_delete_inprogress_template: [
      './private/ra_premium/ra_delete_inprogress_template/ra_delete_inprogress_template-spec.js'
    ],

    ra_create_complete_template: [
      './private/ra_premium/ra_create_complete_template/ra_create_complete_template-spec.js'
    ],

    ra_edit_complete_template: [
      './private/ra_premium/ra_edit_complete_template/ra_edit_complete_template-spec.js'
    ],

    ra_delete_complete_template: [
      './private/ra_premium/ra_delete_complete_template/ra_delete_complete_template-spec.js'
    ],

    dumbleform_first_form: [
      './private/dumbleform/complete_your_profile/complete_your_profile-spec.js'
    ],

    dumbleform_second_form: [
      './private/dumbleform/follow_colleagues/follow_colleagues-spec.js'
    ],

    dumbleform_third_form: [
      './private/dumbleform/vendor_mapping/vendor_mapping-spec.js'
    ],

    log_out: [
      './private/education/log_out_as_admin/log_out_as_admin-spec.js'
    ],

    login_as_admin: [
      './private/education/login_as_admin/login_as_admin-spec.js'
    ],

    create_hosted_webinar: [
      './private/education/create_hosted_webinar/create_hosted_webinar-spec.js'
    ],

    buying_hosted_webinar: [
      './private/education/buying_hosted_webinar/buying_hosted_webinar-spec.js'
    ],

    using_invoice_hosted: [
      './private/education/using_invoice_hosted/using_invoice_hosted-spec.js'
    ],

    set_inactive_hosted: [
      './private/education/set_inactive_hosted/set_inactive_hosted-spec.js'
    ],

    create_outsourced_webinar: [
      './private/education/create_outsourced_webinar/create_outsourced_webinar-spec.js'
    ],

    buying_outsourced_webinar: [
      './private/education/buying_outsourced_webinar/buying_outsourced_webinar-spec.js'
    ],

    using_invoice_outsourced: [
      './private/education/using_invoice_outsourced/using_invoice_outsourced-spec.js'
    ],

    set_inactive_outsourced: [
      './private/education/set_inactive_outsourced/set_inactive_outsourced-spec.js'
    ],

    create_video: [
      './private/education/create_video/create_video-spec.js'
    ],

    buying_video: [
      './private/education/buying_video/buying_video-spec.js'
    ],

    using_invoice_video: [
      './private/education/using_invoice_video/using_invoice_video-spec.js'
    ],

    set_inactive_video: [
      './private/education/set_inactive_video/set_inactive_video-spec.js'
    ],

    all_access: [
      './private/education/all_access/all_access-spec.js'
    ],

    set_all_access_to_false: [
      './private/education/set_all_access_to_false/set_all_access_to_false-spec.js'
    ],
  },

  capabilities: {
    browserName: 'chrome',
    'chromeOptions': {
      'args': ['--disable-gpu', '--window-size=2880,1800']
    }
  },
  jasmineNodeOpts: {
    print: function () { },
    showColors: true,
    defaultTimeoutInterval: 300000
  },

  allScriptsTimeout: 60 * 1000 * 60,
  
  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
    
  }

};