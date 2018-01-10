define({ "api": [
  {
    "type": "get",
    "url": "/api/admin/login",
    "title": "管理员登录",
    "version": "1.0.0",
    "name": "login",
    "group": "admin",
    "sampleRequest": [
      {
        "url": "/api/admin/login"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>唯一登录账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>登录密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>接口状态 0成功 其他异常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>接口信息描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>接口数据集</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.auth",
            "description": "<p>接口认证信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.auth.admin_id",
            "description": "<p>管理员唯一ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.auth.sign",
            "description": "<p>接口签名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.auth.account",
            "description": "<p>管理员账号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.updated_at",
            "description": "<p>最后登录时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.account",
            "description": "<p>管理员账号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.header",
            "description": "<p>管理员头像</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t    \"data\": {\n\t        \"auth\": {\n\t            \"admin_id\": \"1\",\n\t            \"sign\": \"0ec1966af508f2ceda19cf516e03b959\",\n\t            \"account\": \"aicode\"\n\t        },\n\t        \"updated_at\": \"2018-01-08 16:03:47\",\n\t        \"account\": \"aicode\",\n\t        \"header\": \"\"\n\t    },\n\t    \"status\": 0,\n\t    \"message\": \"\"\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t   \"data\": \"\",\n    \"status\": 3,\n    \"message\": \"登录密码错误\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/admin/Login.php",
    "groupTitle": "admin"
  },
  {
    "type": "get",
    "url": "/api/admin/login_out",
    "title": "管理员退出",
    "version": "1.0.0",
    "name": "login_out",
    "group": "admin",
    "sampleRequest": [
      {
        "url": "/api/admin/login_out"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "admin_id",
            "description": "<p>管理员唯一ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>登录账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>校验签名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>接口状态 0成功 其他异常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>接口信息描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>接口数据集</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t    \"data\": \"\",\n\t    \"status\": 0,\n\t    \"message\": \"\"\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t   \"data\": \"\",\n    \"status\": -1,\n    \"message\": \"签名校验错误\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/admin/Login_out.php",
    "groupTitle": "admin"
  },
  {
    "type": "get",
    "url": "/api/admin/shop_class",
    "title": "商城导航类-列表",
    "version": "1.0.0",
    "name": "shop_class",
    "group": "admin",
    "sampleRequest": [
      {
        "url": "/api/admin/shop_class"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "admin_id",
            "description": "<p>管理员唯一ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>登录账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>校验签名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>接口状态 0成功 其他异常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>接口信息描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>接口数据集</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>商城导航类唯一ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>商城导航类名称</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t    \"data\": [\n\t        {\n\t            \"id\": \"1\",\n\t            \"name\": \"热门\"\n\t        },\n\t        {\n\t            \"id\": \"2\",\n\t            \"name\": \"靓号\"\n\t        }\n\t    ],\n\t    \"status\": 0,\n\t    \"message\": \"成功\"\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t   \"data\": \"\",\n    \"status\": -1,\n    \"message\": \"签名校验错误\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/admin/Shop_class.php",
    "groupTitle": "admin"
  },
  {
    "type": "post",
    "url": "/api/admin/shop_class/save",
    "title": "商城导航类-编辑 OR 新增",
    "version": "1.0.0",
    "name": "shop_class_save",
    "group": "admin",
    "sampleRequest": [
      {
        "url": "/api/admin/shop_class/save"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "admin_id",
            "description": "<p>管理员唯一ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>登录账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>校验签名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>记录唯一ID 0表示新增 其他表示编辑</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>导航类名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>排序 数值小在前</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "enable",
            "description": "<p>启用 1是 0否</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deleted",
            "description": "<p>是否删除 1是 0否（为1时其他字段可不传）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>接口状态 0成功 其他异常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>接口信息描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>接口数据集</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t    \"data\": \"\",\n\t    \"status\": 0,\n\t    \"message\": \"\"\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t   \"data\": \"\",\n    \"status\": -1,\n    \"message\": \"签名校验错误\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/admin/Shop_class.php",
    "groupTitle": "admin"
  },
  {
    "type": "get",
    "url": "/api/user/login",
    "title": "用户登录",
    "version": "1.0.0",
    "name": "login",
    "group": "user",
    "sampleRequest": [
      {
        "url": "/api/user/login"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>唯一登录账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>登录密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>接口状态 0成功 其他异常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>接口信息描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>接口数据集</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.auth",
            "description": "<p>接口认证信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.auth.user_id",
            "description": "<p>用户唯一ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.auth.sign",
            "description": "<p>接口签名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.updated_at",
            "description": "<p>最后登录时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.account",
            "description": "<p>用户账号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.header",
            "description": "<p>用户头像</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t    \"data\": {\n\t        \"auth\": {\n\t            \"user_id\": \"1\",\n\t            \"sign\": \"ad8550bf1d589f5213a1b13ba051c376\",\n\t        },\n\t        \"updated_at\": \"2018-01-08 16:03:47\",\n\t        \"account\": \"aicode\",\n\t        \"header\": \"\"\n\t    },\n\t    \"status\": 0,\n\t    \"message\": \"\"\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t   \"data\": \"\",\n    \"status\": 3,\n    \"message\": \"登录密码错误\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/user/Login.php",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/api/user/login_out",
    "title": "用户退出",
    "version": "1.0.0",
    "name": "login_out",
    "group": "user",
    "sampleRequest": [
      {
        "url": "/api/user/login_out"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户唯一ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>校验签名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>接口状态 0成功 其他异常</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>接口信息描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>接口数据集</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t    \"data\": \"\",\n\t    \"status\": 0,\n\t    \"message\": \"\"\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t   \"data\": \"\",\n    \"status\": -1,\n    \"message\": \"签名校验错误\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/user/Login_out.php",
    "groupTitle": "user"
  }
] });