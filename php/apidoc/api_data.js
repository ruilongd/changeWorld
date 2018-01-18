define({ "api": [
  {
    "type": "get",
    "url": "/api/admin/ad",
    "title": "广告-列表",
    "version": "1.0.0",
    "name": "ad",
    "group": "admin",
    "sampleRequest": [
      {
        "url": "/api/admin/ad"
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
            "description": "<p>广告唯一ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>广告名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.size",
            "description": "<p>广告尺寸</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t    \"data\": [\n\t        {\n\t            \"id\": \"1\",\n\t            \"name\": \"热门\",\n\t \t\t\t\t\"size\": \"300 X 400\",\n\t        },\n\t        {\n\t            \"id\": \"2\",\n\t            \"name\": \"靓号\",\n\t            \"size\": \"300 X 400\",\n\t        }\n\t    ],\n\t    \"status\": 0,\n\t    \"message\": \"成功\"\n\t}",
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/admin/Ad.php",
    "groupTitle": "admin"
  },
  {
    "type": "get",
    "url": "/api/admin/ad_position",
    "title": "广告位-列表",
    "version": "1.0.0",
    "name": "ad_position",
    "group": "admin",
    "sampleRequest": [
      {
        "url": "/api/admin/ad_position"
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
            "description": "<p>广告位唯一ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>广告位名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.size",
            "description": "<p>广告位尺寸</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t    \"data\": [\n\t        {\n\t            \"id\": \"1\",\n\t            \"name\": \"热门\",\n\t \t\t\t\t\"size\": \"300 X 400\",\n\t        },\n\t        {\n\t            \"id\": \"2\",\n\t            \"name\": \"靓号\",\n\t            \"size\": \"300 X 400\",\n\t        }\n\t    ],\n\t    \"status\": 0,\n\t    \"message\": \"成功\"\n\t}",
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/admin/Ad_position.php",
    "groupTitle": "admin"
  },
  {
    "type": "post",
    "url": "/api/admin/ad_position/save",
    "title": "广告位-编辑 OR 新增",
    "version": "1.0.0",
    "name": "ad_position_save",
    "group": "admin",
    "sampleRequest": [
      {
        "url": "/api/admin/ad_position/save"
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
            "description": "<p>广告位名称</p>"
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>广告位尺寸</p>"
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/admin/Ad_position.php",
    "groupTitle": "admin"
  },
  {
    "type": "post",
    "url": "/api/admin/ad/save",
    "title": "广告-编辑 OR 新增",
    "version": "1.0.0",
    "name": "ad_save",
    "group": "admin",
    "sampleRequest": [
      {
        "url": "/api/admin/ad/save"
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
            "field": "title",
            "description": "<p>广告名称</p>"
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
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>排序 降序排列</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>链接地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>广告图</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "start_time",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "end_time",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ad_position_id",
            "description": "<p>广告位ID</p>"
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/admin/Ad.php",
    "groupTitle": "admin"
  },
  {
    "type": "post",
    "url": "/api/goods_attr_category/save",
    "title": "商品属性类-编辑 OR 新增",
    "version": "1.0.0",
    "name": "goods_attr_category_save",
    "group": "admin",
    "sampleRequest": [
      {
        "url": "/api/goods_attr_category/save"
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
            "description": "<p>排序 降序排列</p>"
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/Goods_attr_category.php",
    "groupTitle": "admin"
  },
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
    "type": "post",
    "url": "/api/security_question/save",
    "title": "密保-编辑 OR 新增",
    "version": "1.0.0",
    "name": "security_question_save",
    "group": "admin",
    "sampleRequest": [
      {
        "url": "/api/security_question/save"
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
            "field": "title",
            "description": "<p>密保名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>排序 降序排列</p>"
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/Security_question.php",
    "groupTitle": "admin"
  },
  {
    "type": "post",
    "url": "/api/shop_class/save",
    "title": "商城导航类-编辑 OR 新增",
    "version": "1.0.0",
    "name": "shop_class_save",
    "group": "admin",
    "sampleRequest": [
      {
        "url": "/api/shop_class/save"
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
            "description": "<p>排序 降序排列</p>"
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/Shop_class.php",
    "groupTitle": "admin"
  },
  {
    "type": "get",
    "url": "/api/address",
    "title": "个人地址-列表",
    "version": "1.0.0",
    "name": "address",
    "group": "api",
    "sampleRequest": [
      {
        "url": "/api/address"
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
            "description": "<p>个人地址唯一ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.is_default",
            "description": "<p>是否默认地址 0否 1是</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.username",
            "description": "<p>收货人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.mobi",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.province_id",
            "description": "<p>省ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.province",
            "description": "<p>省名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.city_id",
            "description": "<p>市ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.city",
            "description": "<p>市名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.area_id",
            "description": "<p>地区ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.area",
            "description": "<p>地区名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.address",
            "description": "<p>详细地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"data\": [\n      {\n          \"id\": \"3\",\n          \"is_default\": \"1\",\n          \"username\": \"龙建新-1024\",\n          \"mobi\": \"13430332489\",\n          \"province_id\": \"110000\",\n          \"province\": \"北京市\",\n          \"city_id\": \"110101\",\n          \"city\": \"东城区\",\n          \"area_id\": \"0\",\n          \"area\": \"\",\n          \"address\": \"清华园1024号\",\n      }\n ],\n \"status\": 0,\n \"message\": \"成功\"\n}",
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/Address.php",
    "groupTitle": "api"
  },
  {
    "type": "post",
    "url": "/api/address/save",
    "title": "个人地址-编辑 OR 新增",
    "version": "1.0.0",
    "name": "address_save",
    "group": "api",
    "sampleRequest": [
      {
        "url": "/api/address/save"
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
            "type": "Number",
            "optional": false,
            "field": "deleted",
            "description": "<p>是否删除 1是 0否（为1时其他字段可不传）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "is_default",
            "description": "<p>默认设置 1是 0否</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>收货人</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobi",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "province_id",
            "description": "<p>省ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "province",
            "description": "<p>省名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "city_id",
            "description": "<p>市ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>市名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "area_id",
            "description": "<p>区ID 没有传0</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>区名称 没有传空</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/Address.php",
    "groupTitle": "api"
  },
  {
    "type": "get",
    "url": "/api/common/area",
    "title": "地区",
    "version": "1.0.0",
    "name": "common_area",
    "group": "api",
    "sampleRequest": [
      {
        "url": "/api/common/area"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pid",
            "description": "<p>上级ID 0表示顶级</p>"
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
            "description": "<p>地区唯一ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>地区名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.pid",
            "description": "<p>地区上级ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.first_letter",
            "description": "<p>首字母</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"data\": [\n         {\n              \"id\": \"110000\",\n              \"name\": \"北京\",\n              \"pid\": \"0\",\n              \"first_letter\": \"B\"\n          },\n          {\n              \"id\": \"120000\",\n              \"name\": \"天津\",\n              \"pid\": \"0\",\n              \"first_letter\": \"T\"\n          }\n     ],\n     \"status\": 0,\n     \"message\": \"成功\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"data\": \"\",\n    \"status\": -1,\n    \"message\": \"签名校验错误\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/Common.php",
    "groupTitle": "api"
  },
  {
    "type": "post",
    "url": "/api/common/base64FileUpload",
    "title": "base64File文件上传",
    "version": "1.0.0",
    "name": "common_base64FileUpload",
    "group": "api",
    "sampleRequest": [
      {
        "url": "/api/common/base64FileUpload"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "base64_image_content",
            "description": "<p>base64文件编码</p>"
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
            "type": "String",
            "optional": false,
            "field": "data.file_url",
            "description": "<p>文件相对网络路径</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"data\": \"\",\n     \"status\": 0,\n     \"message\": \"成功\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"data\": \"\",\n    \"status\": 1,\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/Common.php",
    "groupTitle": "api"
  },
  {
    "type": "post",
    "url": "/api/common/fileUpload",
    "title": "File文件上传",
    "version": "1.0.0",
    "name": "common_fileUpload",
    "group": "api",
    "sampleRequest": [
      {
        "url": "/api/common/fileUpload"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>file控件名称</p>"
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
            "type": "String",
            "optional": false,
            "field": "data.file_url",
            "description": "<p>文件相对网络路径</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"data\": \"\",\n     \"status\": 0,\n     \"message\": \"成功\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"data\": \"\",\n    \"status\": 1,\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/Common.php",
    "groupTitle": "api"
  },
  {
    "type": "get",
    "url": "/api/common/sms",
    "title": "短信",
    "version": "1.0.0",
    "name": "common_sms",
    "group": "api",
    "sampleRequest": [
      {
        "url": "/api/common/sms"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sms_id",
            "description": "<p>短信模板 0注册</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobi",
            "description": "<p>获取验证码手机号</p>"
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
          "content": "{\n     \"data\": \"\",\n     \"status\": 0,\n     \"message\": \"成功\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"data\": \"\",\n    \"status\": 1,\n    \"message\": \"验证码发送频率为: 180秒/次\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/Common.php",
    "groupTitle": "api"
  },
  {
    "type": "get",
    "url": "/api/goods",
    "title": "商品-列表",
    "version": "1.0.0",
    "name": "goods",
    "group": "api",
    "sampleRequest": [
      {
        "url": "/api/goods"
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
            "description": "<p>商品唯一ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>商品名称</p>"
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/Goods.php",
    "groupTitle": "api"
  },
  {
    "type": "get",
    "url": "/api/goods_attr_category",
    "title": "商品属性类-列表",
    "version": "1.0.0",
    "name": "goods_attr_category",
    "group": "api",
    "sampleRequest": [
      {
        "url": "/api/goods_attr_category"
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
            "description": "<p>商品属性类唯一ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>商品属性类名称</p>"
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/Goods_attr_category.php",
    "groupTitle": "api"
  },
  {
    "type": "get",
    "url": "/api/goods/init",
    "title": "商品-发布初始化",
    "version": "1.0.0",
    "name": "goods_init",
    "group": "api",
    "sampleRequest": [
      {
        "url": "/api/goods/init"
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
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>接口数据集</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.send_mode",
            "description": "<p>发货模式</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.goods_attr",
            "description": "<p>商品属性</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": {\n       \"send_mode\": [\n           \"卖家发货\",\n           \"上门自提\",\n           \"不用发货\"\n       ],\n       \"goods_attr\": [\n           {\n               \"id\": \"9\",\n               \"name\": \"尺寸\"\n           },\n           {\n               \"id\": \"8\",\n               \"name\": \"颜色\"\n           },\n           {\n               \"id\": \"7\",\n               \"name\": \"容量\"\n           },\n           {\n               \"id\": \"6\",\n               \"name\": \"尺寸\"\n           },\n           {\n               \"id\": \"5\",\n               \"name\": \"型号\"\n           },\n           {\n               \"id\": \"4\",\n               \"name\": \"规格\"\n           }\n       ]\n   },\n   \"status\": 0,\n   \"message\": \"成功\"\n}",
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/Goods.php",
    "groupTitle": "api"
  },
  {
    "type": "post",
    "url": "/api/goods/save",
    "title": "商品-编辑 OR 新增",
    "version": "1.0.0",
    "name": "goods_save",
    "group": "api",
    "sampleRequest": [
      {
        "url": "/api/goods/save"
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
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stock",
            "description": "<p>数量</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sale_price",
            "description": "<p>销售价</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "freight_fee",
            "description": "<p>邮费</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "send_mode",
            "description": "<p>发货模式</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goods_ticket",
            "description": "<p>优惠券 json [{full_amount: 500, free_amount: 50}, {full_amount: 1000, free_amount: 150}]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "use_point_rate",
            "description": "<p>积分使用比例</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "e_invoice",
            "description": "<p>是否支持发票</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "city_partner_rate",
            "description": "<p>城市合伙人分销比例</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "two_level_rate",
            "description": "<p>二级分销比例</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goods_image",
            "description": "<p>商品主图 json [&quot;/uploads/2018/01/17/09c4a26e54ab231b734870b510771265.png&quot;]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goods_attr",
            "description": "<p>商品属性 json {&quot;9&quot;:[&quot;M&quot;,&quot;X&quot;,&quot;S&quot;,&quot;L&quot;],&quot;8&quot;:[&quot;红色&quot;,&quot;蓝色&quot;]}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goods_detail",
            "description": "<p>商品详情 json [&quot;/uploads/2018/01/17/09c4a26e54ab231b734870b510771265.png&quot;]</p>"
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/Goods.php",
    "groupTitle": "api"
  },
  {
    "type": "get",
    "url": "/api/normal/images",
    "title": "通用-广告图",
    "version": "1.0.0",
    "name": "normal_images",
    "group": "api",
    "sampleRequest": [
      {
        "url": "/api/normal/images"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "images_id",
            "description": "<p>短信模板 0注册</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job",
            "description": "<p>应用区间{guid: '引导页', startup: '启动页'}</p>"
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
            "type": "Objet[]",
            "optional": false,
            "field": "data",
            "description": "<p>接口数据集</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.link",
            "description": "<p>链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.image",
            "description": "<p>图片</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": [\n       {\n           \"title\": \"22\",\n           \"link\": \"\",\n           \"image\": \"\"\n       }\n   ],\n   \"status\": 0,\n   \"message\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"data\": \"\",\n    \"status\": 1,\n    \"message\": \"验证码发送频率为: 180秒/次\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/Normal.php",
    "groupTitle": "api"
  },
  {
    "type": "get",
    "url": "/api/security_question",
    "title": "密保-列表",
    "version": "1.0.0",
    "name": "security_question",
    "group": "api",
    "sampleRequest": [
      {
        "url": "/api/security_question"
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
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>接口数据集</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.question",
            "description": "<p>密保问题列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.question.id",
            "description": "<p>密保唯一ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.question.title",
            "description": "<p>密保名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.security",
            "description": "<p>密保答案 json 空置表示没有设置 格式：问题ID：答案</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t    \"data\": {\n\t        \"question\": [\n\t            {\n\t                \"id\": \"1\",\n\t                \"title\": \"你的出生地址\"\n\t            },\n\t            {\n\t                \"id\": \"2\",\n\t                \"title\": \"你的母亲生日\"\n\t            },\n\t            {\n\t                \"id\": \"3\",\n\t                \"title\": \"你的身份证号\"\n\t            }\n\t        ],\n\t        \"security\": \"{\\\"1\\\":\\\"中国\\\", \\\"2\\\":\\\"10.1\\\", \\\"3\\\":\\\"1024\\\"}\"\n\t    },\n\t    \"status\": 0,\n\t    \"message\": \"成功\"\n\t}",
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/Security_question.php",
    "groupTitle": "api"
  },
  {
    "type": "post",
    "url": "/api/security_question/query",
    "title": "密保-设置",
    "version": "1.0.0",
    "name": "security_question_query",
    "group": "api",
    "sampleRequest": [
      {
        "url": "/api/security_question/query"
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
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "security_question",
            "description": "<p>密保问题答案json {密保问题ID:密保答案, 密保问题ID:密保答案}</p>"
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/Security_question.php",
    "groupTitle": "api"
  },
  {
    "type": "get",
    "url": "/api/shop_class",
    "title": "商城导航类-列表",
    "version": "1.0.0",
    "name": "shop_class",
    "group": "api",
    "sampleRequest": [
      {
        "url": "/api/shop_class"
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/Shop_class.php",
    "groupTitle": "api"
  },
  {
    "type": "get",
    "url": "/api/user/bind",
    "title": "账号绑定-列表",
    "version": "1.0.0",
    "name": "bind",
    "group": "user",
    "sampleRequest": [
      {
        "url": "/api/user/bind"
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
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>接口数据集</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.mobi",
            "description": "<p>绑定手机 空表示未绑定</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.qq_uid",
            "description": "<p>绑定QQ 空表示未绑定</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.weixin_uid",
            "description": "<p>绑定微信 空表示未绑定</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.weibo_uid",
            "description": "<p>绑定微博 空表示未绑定</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n        \"mobi\": \"13430332489\",\n        \"qq_uid\": \"\",\n        \"weixin_uid\": \"\",\n        \"weibo_uid\": \"\",\n    },\n    \"status\": 0,\n    \"message\": \"成功\"\n}",
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/user/Bind.php",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/api/user/bind/save",
    "title": "账号绑定-修改",
    "version": "1.0.0",
    "name": "bind_save",
    "group": "user",
    "sampleRequest": [
      {
        "url": "/api/user/bind/save"
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "act",
            "description": "<p>操作动作 [mobi:手机, qq:QQ, weixin:微信, weibo:新浪微博]</p>"
          }
        ]
      }
    },
    "description": "<p>mobi传递参数: mobi,code qq传递参数: weixin传递参数: weibo传递参数:</p>",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": \"\",\n    \"status\": 0,\n    \"message\": \"成功\"\n}",
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/user/Bind.php",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/api/user/collection",
    "title": "收藏&关注-列表",
    "version": "1.0.0",
    "name": "collection",
    "group": "user",
    "sampleRequest": [
      {
        "url": "/api/user/collection"
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
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "topic",
            "description": "<p>主题类型 1关注 2收藏</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "t_id",
            "description": "<p>主题类型 = 1时传递 [0关注 1粉丝]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sub_topic",
            "description": "<p>主题类型 = 2时传递 10下载[10声音, 11专辑] 20已购[10声音, 11专辑] 30喜欢 40商品 50订阅</p>"
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/user/Collection.php",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/api/user/collection/save",
    "title": "收藏&关注-保存",
    "version": "1.0.0",
    "name": "collection_save",
    "group": "user",
    "sampleRequest": [
      {
        "url": "/api/user/collection/save"
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
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "t_id",
            "description": "<p>被关联唯一ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "topic",
            "description": "<p>主题类型 1关注 2收藏</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sub_topic",
            "description": "<p>子主题类型(关注不用传) 10下载[10声音, 11专辑] 20已购[10声音, 11专辑] 30喜欢 40商品 50订阅</p>"
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
          "content": "{\n\t    \"data\": \"\",\n\t    \"status\": 0,\n\t    \"message\": \"\"\n}",
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/user/Collection.php",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/api/forget/mobi",
    "title": "忘记密码-手机号重设",
    "version": "1.0.0",
    "name": "forget_mobi",
    "group": "user",
    "sampleRequest": [
      {
        "url": "/api/forget/mobi"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobi",
            "description": "<p>注册手机</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>新密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirm_password",
            "description": "<p>确认密码</p>"
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
            "description": "<p>接口状态 0成功 其他异常 设置成功直接登录成功</p>"
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
            "field": "data.nickname",
            "description": "<p>用户昵称</p>"
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
          "content": "{\n\t    \"data\": {\n\t        \"auth\": {\n\t            \"user_id\": \"1\",\n\t            \"sign\": \"ad8550bf1d589f5213a1b13ba051c376\",\n\t        },\n\t        \"updated_at\": \"2018-01-08 16:03:47\",\n\t        \"nickname\": \"aicode\",\n\t        \"header\": \"\"\n\t    },\n\t    \"status\": 0,\n\t    \"message\": \"成功\"\n\t}",
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/Forget.php",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/api/user/info",
    "title": "用户中心",
    "version": "1.0.0",
    "name": "info",
    "group": "user",
    "sampleRequest": [
      {
        "url": "/api/user/info"
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
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>接口数据集</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.user",
            "description": "<p>用户关联属性</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user.id",
            "description": "<p>用户唯一ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user.nickname",
            "description": "<p>用户昵称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user.header",
            "description": "<p>用户头像</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user.v",
            "description": "<p>用户V认证 0未认证 1待审核 2未通过 3通过</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user.anchor",
            "description": "<p>讲师标识 0未认证 1待审核 2未通过 3通过</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user.shop",
            "description": "<p>开店 0否 1待审核 2未通过 3通过</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user.exp",
            "description": "<p>经验值</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user.vip_id",
            "description": "<p>贵族级别 0无</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.collection",
            "description": "<p>收藏数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.follow",
            "description": "<p>关注数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.fans",
            "description": "<p>粉丝数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": {\n       \"user\": {\n           \"id\": \"1\",\n           \"nickname\": \"aicode\",\n           \"header\": \"\",\n           \"v\": \"0\",\n           \"anchor\": \"0\",\n           \"shop\": \"0\",\n           \"exp\": \"0\",\n           \"vip_id\": \"0\"\n       },\n       \"collection\": 0,\n       \"follow\": 4,\n       \"fans\": 1\n   },\n   \"status\": 0,\n   \"message\": \"成功\"\n}",
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/user/Info.php",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/api/user/info/save",
    "title": "用户信息-修改",
    "version": "1.0.0",
    "name": "info_save",
    "group": "user",
    "sampleRequest": [
      {
        "url": "/api/user/info/save"
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "act",
            "description": "<p>操作动作 [修改密码:password, 支付密码:pay_password]</p>"
          }
        ]
      }
    },
    "description": "<p>password传递参数: old_password,new_password,confirm_password pay_password传递参数: pay_password,confirm_password</p>",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": \"\",\n    \"status\": 0,\n    \"message\": \"成功\"\n}",
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/user/Info.php",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/api/user/info/view",
    "title": "用户信息-查看",
    "version": "1.0.0",
    "name": "info_view",
    "group": "user",
    "sampleRequest": [
      {
        "url": "/api/user/info/view"
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
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>接口数据集</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.header",
            "description": "<p>用户头像</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.nickname",
            "description": "<p>用户昵称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.sex",
            "description": "<p>性别 1男 2女 0保密</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.birth",
            "description": "<p>出生日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.summary",
            "description": "<p>简介</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.mobi",
            "description": "<p>绑定手机 空表示未绑定</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.qq_uid",
            "description": "<p>绑定QQ 空表示未绑定</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.weixin_uid",
            "description": "<p>绑定微信 空表示未绑定</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.weibo_uid",
            "description": "<p>绑定微博 空表示未绑定</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.age",
            "description": "<p>年龄</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n        \"header\": \"\",\n        \"nickname\": \"aicode\",\n        \"sex\": \"0\",\n        \"birth\": \"2018-01-12\",\n        \"summary\": \"\",\n        \"mobi\": \"13430332489\",\n        \"qq_uid\": \"\",\n        \"weixin_uid\": \"\",\n        \"weibo_uid\": \"\",\n        \"age\": 0\n    },\n    \"status\": 0,\n    \"message\": \"成功\"\n}",
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/user/Info.php",
    "groupTitle": "user"
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
            "description": "<p>登录手机/账号</p>"
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
            "field": "data.nickname",
            "description": "<p>用户昵称</p>"
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
          "content": "{\n\t    \"data\": {\n\t        \"auth\": {\n\t            \"user_id\": \"1\",\n\t            \"sign\": \"ad8550bf1d589f5213a1b13ba051c376\",\n\t        },\n\t        \"updated_at\": \"2018-01-08 16:03:47\",\n\t        \"nickname\": \"aicode\",\n\t        \"header\": \"\"\n\t    },\n\t    \"status\": 0,\n\t    \"message\": \"成功\"\n\t}",
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
  },
  {
    "type": "get",
    "url": "/api/user/login/qq",
    "title": "QQ登录",
    "version": "1.0.0",
    "name": "login_qq",
    "group": "user",
    "sampleRequest": [
      {
        "url": "/api/user/login/qq"
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
            "field": "data.nickname",
            "description": "<p>用户昵称</p>"
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
          "content": "{\n\t    \"data\": {\n\t        \"auth\": {\n\t            \"user_id\": \"1\",\n\t            \"sign\": \"ad8550bf1d589f5213a1b13ba051c376\",\n\t        },\n\t        \"updated_at\": \"2018-01-08 16:03:47\",\n\t        \"nickname\": \"aicode\",\n\t        \"header\": \"\"\n\t    },\n\t    \"status\": 0,\n\t    \"message\": \"成功\"\n\t}",
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
    "url": "/api/user/login/tourist",
    "title": "匿名登录",
    "version": "1.0.0",
    "name": "login_tourist",
    "group": "user",
    "sampleRequest": [
      {
        "url": "/api/user/login/tourist"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guid",
            "description": "<p>设备唯一码</p>"
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
            "field": "data.nickname",
            "description": "<p>用户昵称</p>"
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
          "content": "{\n\t    \"data\": {\n\t        \"auth\": {\n\t            \"user_id\": \"1\",\n\t            \"sign\": \"ad8550bf1d589f5213a1b13ba051c376\",\n\t        },\n\t        \"updated_at\": \"2018-01-08 16:03:47\",\n\t        \"nickname\": \"匿名\",\n\t        \"header\": \"\"\n\t    },\n\t    \"status\": 0,\n\t    \"message\": \"成功\"\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n\t   \"data\": \"\",\n    \"status\": 1,\n    \"message\": \"匿名登录参数非法\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/user/Login.php",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/api/user/login/weixin",
    "title": "微信登录",
    "version": "1.0.0",
    "name": "login_weixin",
    "group": "user",
    "sampleRequest": [
      {
        "url": "/api/user/login/weixin"
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
            "field": "data.nickname",
            "description": "<p>用户昵称</p>"
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
          "content": "{\n\t    \"data\": {\n\t        \"auth\": {\n\t            \"user_id\": \"1\",\n\t            \"sign\": \"ad8550bf1d589f5213a1b13ba051c376\",\n\t        },\n\t        \"updated_at\": \"2018-01-08 16:03:47\",\n\t        \"nickname\": \"aicode\",\n\t        \"header\": \"\"\n\t    },\n\t    \"status\": 0,\n\t    \"message\": \"成功\"\n\t}",
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
    "type": "post",
    "url": "/api/user/register",
    "title": "注册-校验手机",
    "version": "1.0.0",
    "name": "register",
    "group": "user",
    "sampleRequest": [
      {
        "url": "/api/user/register"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobi",
            "description": "<p>注册手机</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p>"
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
          "content": "{\n\t   \"data\": \"\",\n    \"status\": 3,\n    \"message\": \"登录密码错误\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/user/Register.php",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/api/user/register/account",
    "title": "注册-完善账号",
    "version": "1.0.0",
    "name": "register_account",
    "group": "user",
    "sampleRequest": [
      {
        "url": "/api/user/register/account"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobi",
            "description": "<p>注册手机</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirm_password",
            "description": "<p>确认密码</p>"
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
            "field": "data.nickname",
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
          "content": "{\n\t    \"data\": {\n\t        \"auth\": {\n\t            \"user_id\": \"1\",\n\t            \"sign\": \"ad8550bf1d589f5213a1b13ba051c376\",\n\t        },\n\t        \"updated_at\": \"2018-01-08 16:03:47\",\n\t        \"nickname\": \"13430332489\",\n\t        \"header\": \"\"\n\t    },\n\t    \"status\": 0,\n\t    \"message\": \"\"\n\t}",
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
    "filename": "E:/www/project/taskusbipowggnphe/php/application/controllers/api/user/Register.php",
    "groupTitle": "user"
  }
] });
