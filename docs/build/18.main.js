webpackJsonp([18],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity__ = __webpack_require__(294);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPageModule", function() { return ActivityPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActivityPageModule = (function () {
    function ActivityPageModule() {
    }
    return ActivityPageModule;
}());
ActivityPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__activity__["a" /* ActivityPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activity__["a" /* ActivityPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__activity__["a" /* ActivityPage */]
        ]
    })
], ActivityPageModule);

//# sourceMappingURL=activity.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_activity_activity__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_printer__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_notification_notification__ = __webpack_require__(304);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ActivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ActivityPage = (function () {
    function ActivityPage(navCtrl, navParams, activityProvider, iab, platform, printer, alert, socialSharing, notificationProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activityProvider = activityProvider;
        this.iab = iab;
        this.platform = platform;
        this.printer = printer;
        this.alert = alert;
        this.socialSharing = socialSharing;
        this.notificationProvider = notificationProvider;
        this.dailyActivityCompleted = false;
        var activityObj = this.navParams.get("activity");
        console.log("activityObj", activityObj);
        if (!activityObj) {
            this.activityProvider.getRandomActivity().then(function (randomActivity) {
                _this.activity = randomActivity;
            });
        }
        else {
            this.activity = activityObj;
        }
        this.activityProvider.userHasCompletedActivityForToday().then(function (activityDone) {
            // activityDone == null ? this.dailyActivityCompleted = false : this.dailyActivityCompleted = true;
        });
        console.log(platform.is('cordova'));
        // if(platform.is('cordova')) {
        //   this.scheduleNextNotification();
        // }
    }
    ActivityPage.prototype.activityDoneForToday = function () {
        var _this = this;
        this.activityProvider.setActivityCompletedForToday().then(function (result) {
            _this.dailyActivityCompleted = true;
            if (!_this.platform.is('core')) {
                _this.alert.displayToast("Η άσκηση για σήμερα καταγράφηκε");
            }
        });
    };
    ActivityPage.prototype.openLink = function (url) {
        this.iab.create(url);
    };
    ActivityPage.prototype.print = function () {
        var _this = this;
        console.log("checking for printer");
        this.printer.isAvailable().then(function (isAvailable) {
            console.log("isAvailable", isAvailable);
            if (isAvailable) {
                _this.pickPrinter();
            }
            else {
                _this.printerNotAvailable();
            }
        });
    };
    ActivityPage.prototype.pickPrinter = function () {
        var _this = this;
        console.log("pickPrinter");
        this.printer.pick().then(function (result) {
            if (result !== null)
                _this.alert.displayToast("Printing option selected");
        });
    };
    ActivityPage.prototype.printerNotAvailable = function () {
        console.log("printer not available");
        this.alert.textDialog("Printer", "Δεν βρέθηκε εκτυπωτής στο τοπικό δίκτυο");
    };
    ActivityPage.prototype.printSuccess = function () {
        console.log("document sent to printer");
    };
    ActivityPage.prototype.printError = function () {
        console.log("print error");
        this.alert.textDialog("Printer error", "Συνέβη ένα σφάλμα κατά την εκτύπωση");
    };
    ActivityPage.prototype.printActivityDoc = function () {
        console.log("ready to print");
        var options = {
            name: this.activity.title,
            duplex: true,
            landscape: false,
            grayscale: true
        };
        this.printer.print(this.activity.title, options).then(this.printSuccess, this.printError);
    };
    ActivityPage.prototype.share = function (activity) {
        var _this = this;
        var options = {
            message: 'ΔιΆνοια - δραστηριότητα: ' + activity.title + "    ",
            subject: 'ΔιΆνοια - δραστηριότητα: ' + activity.title,
            url: activity.link,
            chooserTitle: 'Κοινοποίηση με...'
        };
        this.socialSharing.shareWithOptions(options).then(function (result) {
            console.log(result);
            // if(result.completed)
            _this.alert.displayToast("Η δραστηριοτητα κοινοποιηθηκε");
        }).catch(function (error) {
            _this.alert.textDialog("Error", "Αυτή η συσκευή δεν υποστηρίζει κοινοποίηση");
        });
    };
    return ActivityPage;
}());
ActivityPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-activity',template:/*ion-inline-start:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/activity/activity.html"*/'<!--\n  Generated template for the ActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ activity?.title }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-item>\n      <h2 class="title">{{ activity?.title }}</h2>\n      <!--<p>November 5, 1955</p>-->\n    </ion-item>\n\n    <ion-card-content>\n      <p>{{ activity?.description }}</p>\n\n      <img class="activityImg" *ngIf="activity?.img_url" [src]="\'assets/img/activities/\' + activity.img_url">\n\n      <div *ngIf="activity?.id" class="instructionsList">\n        <p>Οδηγίες:</p>\n        <ion-list no-lines>\n          <ion-item text-wrap *ngFor="let instruction of activity?.instructions">\n            <ion-icon name="ios-checkmark" item-left></ion-icon>\n            {{ instruction }}\n          </ion-item>\n        </ion-list>\n      </div>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <a *ngIf="activity?.link && platform.is(\'core\')" href="{{ activity.link }}" target="_blank">\n          <button ion-button icon-left clear small>\n            <ion-icon name="ios-link"></ion-icon>\n            <div>Open link</div>\n          </button>\n        </a>\n        <button *ngIf="activity?.link && !platform.is(\'core\')" ion-button icon-left clear small (click)="openLink(activity.link)">\n          <ion-icon name="ios-link"></ion-icon>\n          <div>Open link</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button *ngIf="activity?.link" ion-button icon-left clear small (click)="share(activity)">\n          <ion-icon name="ios-share-alt"></ion-icon>\n          <div>Share</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button *ngIf="activity?.id" clear ion-button icon-left small [disabled]="dailyActivityCompleted" (click)="activityDoneForToday()">\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>Done</div>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/activity/activity.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_activity_activity__["a" /* ActivityProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_activity_activity__["a" /* ActivityProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_printer__["a" /* Printer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_printer__["a" /* Printer */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__providers_notification_notification__["a" /* NotificationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_notification_notification__["a" /* NotificationProvider */]) === "function" && _j || Object])
], ActivityPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=activity.js.map

/***/ })

});
//# sourceMappingURL=18.main.js.map