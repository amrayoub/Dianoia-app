webpackJsonp([16],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationsPageModule = (function () {
    function NotificationsPageModule() {
    }
    return NotificationsPageModule;
}());
NotificationsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */]
        ]
    })
], NotificationsPageModule);

//# sourceMappingURL=notifications.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_storage_app_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notification_notification__ = __webpack_require__(304);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
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
 * Generated class for the NotificationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, navParams, platform, appStorage, alert, localNotifications) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.appStorage = appStorage;
        this.alert = alert;
        this.localNotifications = localNotifications;
        this.notificationOptions = [
            { title: "Κάθε μέρα", id: 'every_day' },
            { title: "Μια φορά την εβδομάδα", id: 'every_week' },
            { title: "Μια φορά το μήνα", id: 'every_month' },
            { title: "Να μην έρχονται ειδοποιήσεις", id: 'never' }
        ];
        this.selectedNotificationId = 'every_day';
        this.appStorage.get('notification_frequency').then(function (frequencyId) {
            if (JSON.parse(frequencyId)) {
                console.log("frequency: ", JSON.parse(frequencyId));
                _this.selectedNotificationId = JSON.parse(frequencyId);
            }
        });
    }
    NotificationsPage.prototype.saveNotificationSettings = function () {
        var _this = this;
        console.log(this.selectedNotificationId);
        if (this.selectedNotificationId) {
            this.appStorage.set('notification_frequency', this.selectedNotificationId).then(function (result) {
                if (_this.platform.is('cordova')) {
                    _this.localNotifications.scheduleNextNotification();
                }
                if (_this.platform.is('cordova'))
                    _this.alert.displayToast("Οι ρυθμίσεις αποθηκεύτηκαν.");
            });
        }
        else {
            if (this.platform.is('cordova')) {
                this.alert.displayToast("Πρέπει να δηλώσετε κάποια επιλογή");
            }
            else {
                alert("Πρέπει να δηλώσετε κάποια επιλογή");
            }
        }
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-notifications',template:/*ion-inline-start:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/notifications/notifications.html"*/'<!--\n  Generated template for the NotificationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ρυθμίσεις ειδοποιήσεων</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div *ngIf="platform.is(\'cordova\')">\n\n    <ion-list radio-group [(ngModel)]="selectedNotificationId">\n      <ion-list-header>\n        Να λαμβάνω ειδοποιήσεις για δραστηριότητες:\n      </ion-list-header>\n\n      <ion-item *ngFor="let notificationOption of notificationOptions">\n        <ion-label>{{ notificationOption.title }}</ion-label>\n        <ion-radio value="{{ notificationOption.id }}"></ion-radio>\n      </ion-item>\n\n    </ion-list>\n    <button large ion-button (click)="saveNotificationSettings()">Save</button>\n  </div>\n\n  <div *ngIf="!platform.is(\'cordova\')">\n    <h4>Αυτή η συσκευή δεν υποστηρίζει ειδοποιήσεις.</h4>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/notifications/notifications.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_app_storage_app_storage__["a" /* AppStorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_app_storage_app_storage__["a" /* AppStorageProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_notification_notification__["a" /* NotificationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_notification_notification__["a" /* NotificationProvider */]) === "function" && _f || Object])
], NotificationsPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=notifications.js.map

/***/ })

});
//# sourceMappingURL=16.main.js.map