"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/server.ts
var server_exports = {};
__export(server_exports, {
  app: () => app
});
module.exports = __toCommonJS(server_exports);
var import_express2 = __toESM(require("express"));

// src/routes.ts
var import_express = require("express");

// src/dtos/schemaSendEmail.ts
var import_zod = require("zod");
var schemaSendEmail = import_zod.z.object({
  from: import_zod.z.object({
    name: import_zod.z.string({
      required_error: "Name is required"
    }),
    email: import_zod.z.string({
      required_error: "Email is required"
    }).email()
  }),
  to: import_zod.z.array(import_zod.z.object({
    name: import_zod.z.string({
      required_error: "Name is required"
    }),
    email: import_zod.z.string({
      required_error: "Email is required"
    }).email()
  })),
  subject: import_zod.z.string({
    required_error: "Subject is required"
  }),
  body: import_zod.z.string({
    required_error: "Body is required"
  })
});

// src/services/sendEmailService.ts
var SendEmailService = class {
  execute(_0) {
    return __async(this, arguments, function* ({ from, to, subject, body }) {
    });
  }
};

// src/controllers/sendEmailController.ts
var SendEmailController = class {
  handle(req, res) {
    return __async(this, null, function* () {
      const { from, to, subject, body } = schemaSendEmail.parse(req.body);
      const sendEmailService = new SendEmailService();
      yield sendEmailService.execute({
        from,
        to,
        subject,
        body
      });
      res.status(200).json({
        "status": "ok",
        "message": "Email enviado com sucesso"
      });
    });
  }
};

// src/routes.ts
var router = (0, import_express.Router)();
var sendEmailController = new SendEmailController();
router.get("/email", (req, res) => sendEmailController.handle);
router.post("/forgot", (req, res) => new AuthEmailController().handle);

// src/server.ts
var import_config = require("dotenv/config");
var app = (0, import_express2.default)();
app.use(import_express2.default.urlencoded());
app.use(import_express2.default.json());
app.use(router);
app.listen(4444, () => {
  console.log("Aplica\xE7\xE3o de emails funcionando");
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  app
});
