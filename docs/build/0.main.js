webpackJsonp([0],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__difficulty_levels__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_buttons_list_buttons_list_module__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_cards_list_cards_list_module__ = __webpack_require__(279);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DifficultyLevelsPageModule", function() { return DifficultyLevelsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DifficultyLevelsPageModule = (function () {
    function DifficultyLevelsPageModule() {
    }
    return DifficultyLevelsPageModule;
}());
DifficultyLevelsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__difficulty_levels__["a" /* DifficultyLevelsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__difficulty_levels__["a" /* DifficultyLevelsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_buttons_list_buttons_list_module__["a" /* ButtonsListComponentModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_cards_list_cards_list_module__["a" /* CardsListComponentModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__difficulty_levels__["a" /* DifficultyLevelsPage */]
        ]
    })
], DifficultyLevelsPageModule);

//# sourceMappingURL=difficulty-levels.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttons_list__ = __webpack_require__(278);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsListComponentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ButtonsListComponentModule = (function () {
    function ButtonsListComponentModule() {
    }
    return ButtonsListComponentModule;
}());
ButtonsListComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__buttons_list__["a" /* ButtonsListComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buttons_list__["a" /* ButtonsListComponent */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__buttons_list__["a" /* ButtonsListComponent */]
        ]
    })
], ButtonsListComponentModule);

//# sourceMappingURL=buttons-list.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsListComponent; });
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
 * Generated class for the ButtonsListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ButtonsListComponent = (function () {
    function ButtonsListComponent() {
        this.buttonClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* EventEmitter */]();
    }
    ButtonsListComponent.prototype.onButtonClick = function (button) {
        this.buttonClick.emit(button);
    };
    return ButtonsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])('buttons'),
    __metadata("design:type", Array)
], ButtonsListComponent.prototype, "buttons", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], ButtonsListComponent.prototype, "buttonClick", void 0);
ButtonsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'buttons-list',template:/*ion-inline-start:"/home/pisaris/projects/dianoia-app/dianoia/src/components/buttons-list/buttons-list.html"*/'<!-- Generated template for the ButtonsListComponent component -->\n<div>\n  <div class="buttonsContainer">\n    <p *ngFor="let button of buttons">\n      <button mode="ios" ion-button full (click)="onButtonClick(button)">{{ button.title }}</button>\n    </p>\n  </div>\n</div>\n'/*ion-inline-end:"/home/pisaris/projects/dianoia-app/dianoia/src/components/buttons-list/buttons-list.html"*/
    }),
    __metadata("design:paramtypes", [])
], ButtonsListComponent);

//# sourceMappingURL=buttons-list.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_list__ = __webpack_require__(280);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsListComponentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardsListComponentModule = (function () {
    function CardsListComponentModule() {
    }
    return CardsListComponentModule;
}());
CardsListComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__cards_list__["a" /* CardsListComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cards_list__["a" /* CardsListComponent */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__cards_list__["a" /* CardsListComponent */]
        ]
    })
], CardsListComponentModule);

//# sourceMappingURL=cards-list.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsListComponent; });
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
 * Generated class for the CardsListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var CardsListComponent = (function () {
    function CardsListComponent() {
        this.cardClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* EventEmitter */]();
    }
    CardsListComponent.prototype.onCardClick = function (card) {
        this.cardClick.emit(card);
    };
    return CardsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])('cards'),
    __metadata("design:type", Array)
], CardsListComponent.prototype, "cards", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], CardsListComponent.prototype, "cardClick", void 0);
CardsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'cards-list',template:/*ion-inline-start:"/home/pisaris/projects/dianoia-app/dianoia/src/components/cards-list/cards-list.html"*/'<ion-card mode="ios" *ngFor="let card of cards" (click)="onCardClick(card)">\n  <button ion-item no-padding>\n    <ion-item no-padding style="background: rgba(0,0,0,0);">\n      <ion-card-header text-wrap>\n        {{ card.id }}\n      </ion-card-header>\n      <ion-card-content>\n        <p>\n          {{ card.id }}\n        </p>\n      </ion-card-content>\n    </ion-item>\n  </button>\n\n</ion-card>\n'/*ion-inline-end:"/home/pisaris/projects/dianoia-app/dianoia/src/components/cards-list/cards-list.html"*/
    }),
    __metadata("design:paramtypes", [])
], CardsListComponent);

//# sourceMappingURL=cards-list.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_activity_category_activity_category__ = __webpack_require__(201);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DifficultyLevelsPage; });
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
 * Generated class for the DifficultyLevelsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DifficultyLevelsPage = (function () {
    function DifficultyLevelsPage(navCtrl, navParams, categoryProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.categoryProvider = categoryProvider;
        this.levels = this.navParams.get("levels");
        this.categoryId = this.navParams.get("categoryId");
        this.allActivities = this.navParams.get("activities");
        this.activities = this.allActivities;
        if (this.levels == null) {
            this.navCtrl.setRoot("HomePage");
        }
        else {
            this.levels.unshift({ id: "0", title: "Όλα τα επίπεδα" });
        }
        this.categoryProvider.getCategoryById(this.categoryId).subscribe(function (category) {
            _this.category = category;
        });
    }
    DifficultyLevelsPage.prototype.getPageTitle = function () {
        return this.category != null ? this.category.title : "Δραστηριότητες";
    };
    DifficultyLevelsPage.prototype.selectLevel = function (levelButton) {
        if (levelButton.id == 0) {
            this.activities = this.allActivities;
        }
        else {
            this.activities = [];
            for (var _i = 0, _a = this.allActivities; _i < _a.length; _i++) {
                var activity = _a[_i];
                if (activity.difficulty_level_id == levelButton.id) {
                    this.activities.push(activity);
                }
            }
        }
    };
    DifficultyLevelsPage.prototype.selectActivity = function (activity) {
        console.log(activity);
    };
    return DifficultyLevelsPage;
}());
DifficultyLevelsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-difficulty-levels',template:/*ion-inline-start:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/difficulty-levels/difficulty-levels.html"*/'<!--\n  Generated template for the DifficultyLevelsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title> {{ getPageTitle() }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="description">Επιλέξτε επίπεδο δυσκολίας</div>\n\n  <buttons-list *ngIf=\'levels?.length > 0\' [buttons]="levels" (buttonClick)="selectLevel($event)"></buttons-list>\n\n  <cards-list *ngIf=\'activities?.length > 0\' [cards]="activities" (cardClick)="selectActivity($event)"></cards-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/pisaris/projects/dianoia-app/dianoia/src/pages/difficulty-levels/difficulty-levels.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_activity_category_activity_category__["a" /* ActivityCategoryProvider */]])
], DifficultyLevelsPage);

//# sourceMappingURL=difficulty-levels.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map