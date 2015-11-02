(function(window, undefined) {
  var dictionary = {
    "d907f92c-0d8a-4aec-a9aa-9903d35fce5b": "Downloads_others_en",
    "c147acaa-21fc-4d7f-8b7e-08e7a7242cd5": "Informations_quakehistory_en",
    "e16cd85f-a3b7-42c4-ae9a-2666c3d88875": "Downloads_templateplans_en",
    "b3962864-c293-4560-aae1-abcc7570b58e": "SEARCH_en",
    "9fef88bd-b44f-40b3-a67b-75dedc590c90": "TERMS&CONDITIONS_en",
    "97cf0411-aaa5-4b59-916a-fa10531fad20": "Plans_home_en",
    "5682d8ab-b633-47ee-b6c5-275b0d023975": "Plans_work_en",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "HOME_en",
    "69ae3d2b-5637-442c-84ee-4487b7799768": "CREATEPLAN_en",
    "8e4d0f06-42b7-4670-b732-a9f60952f374": "Informations_regionquake_en",
    "f4b61cca-a6e9-48cd-917a-97a4ebad9418": "GETREADY_en",
    "6c98e0c9-5b4d-47c5-b94e-0806a3143ec0": "Plans_school_en",
    "2fc32bbf-5615-4acf-b333-4899b9179974": "GetReady_howtopreparefirstkit_en",
    "fe77bcc6-da31-4a63-93f8-bc01feeeeb95": "GetReady_bda_en",
    "f8066388-30e3-42cb-9249-e53fb9b483f4": "HOME_cn",
    "ec669e85-c151-4705-9cca-b2d68bf6c320": "HOME_maori",
    "19b519b1-b4c5-4fb9-995e-e3510f57d06b": "Onlineshop_grab&go_en",
    "441daa41-7885-4bfe-8a1d-71dd742bab4f": "LOGIN_en",
    "e0a26580-6a99-4641-bc83-c0f55558a0ac": "FAQS_en",
    "ba0bb37c-7c9c-420b-b56b-b79768efb452": "ACUS_en",
    "b04d9027-77e2-4eec-8ccc-4b328b2df88c": "Information_sos_en",
    "373359b8-2dc3-418e-8397-1288044a5fc4": "ORDERS_en",
    "ef6b84e5-fb24-435d-ae67-7811309687fd": "REGISTER_en",
    "8569727c-2fe7-4d34-9ee5-8443231d4cee": "FORGOTPASSWORD_en",
    "5a1d8745-4125-42aa-a71b-e5bac2b07a00": "PLANS_en",
    "790aa130-0721-42c0-94bd-3c5febbc4d56": "Downloads_app_en",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "c6b0e0fc-718a-4546-bcfe-b0c148c1fed7": "header_cn",
    "32d65436-188c-42b8-8f64-83bd917f8222": "footer_cn",
    "681ede3b-0c61-4324-bb6f-4e9e9ddd6467": "header_maori",
    "781d7d3b-4e93-4841-8264-9267463768eb": "footer_en",
    "4c404e97-68cf-4e21-b6bf-c2326aec6e1c": "header_en",
    "368a1130-81cf-490f-b6fe-c289c972109f": "footer_maori"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);