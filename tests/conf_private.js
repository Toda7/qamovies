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

  log_out_as_admin: [
    './private/education/log_out_as_admin/log_out_as_admin-spec.js'
  ],

  login: [
    './private/account/login/login-spec.js'
  ],

  using_invoice_hosted: [
    './private/education/using_invoice_hosted/using_invoice_hosted-spec.js'
  ],

  log_out_as_admin2: [
    './private/education/log_out_as_admin2/log_out_as_admin2-spec.js'
  ],

  login_as_admin2: [
    './private/education/login_as_admin2/login_as_admin2-spec.js'
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

  log_out_as_admin3: [
    './private/education/log_out_as_admin3/log_out_as_admin3-spec.js'
  ],

  login_as_user: [
    './private/education/login_as_user/login_as_user-spec.js'
  ],

  using_invoice_outsourced: [
    './private/education/using_invoice_outsourced/using_invoice_outsourced-spec.js'
  ],

  log_out_as_admin3: [
    './private/education/log_out_as_admin3/log_out_as_admin3-spec.js'
  ],

  login_as_admin2: [
    './private/education/login_as_admin2/login_as_admin2-spec.js'
  ],

  using_invoice_outsourced: [
    './private/education/using_invoice_outsourced/using_invoice_outsourced-spec.js'
  ],

  log_out_as_admin4: [
    './private/education/log_out_as_admin4/log_out_as_admin4-spec.js'
  ],

  login_as_admin3: [
    './private/education/login_as_admin3/login_as_admin3-spec.js'
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

  log_out_as_admin5: [
    './private/education/log_out_as_admin5/log_out_as_admin5-spec.js'
  ],

  login_as_user2: [
    './private/education/login_as_user2/login_as_user2-spec.js'
  ],
  
  using_invoice_video: [
    './private/education/using_invoice_video/using_invoice_video-spec.js'
  ],

  log_out_as_admin6: [
    './private/education/log_out_as_admin6/log_out_as_admin6-spec.js'
  ],

  login_as_admin4: [
    './private/education/login_as_admin4/login_as_admin4-spec.js'
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