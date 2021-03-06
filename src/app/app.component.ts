import {Component, ViewChild} from "@angular/core";
import {Nav, Platform} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {NotificationProvider} from "../providers/notification/notification";
import {AppStorageProvider} from "../providers/app-storage/app-storage";
import {Http} from "@angular/http";
import {AlertProvider} from "../providers/alert/alert";
import {ActivityCategoryProvider} from "../providers/activity-category/activity-category";
import {ActivityProvider} from "../providers/activity/activity";
import {DifficultyLevelProvider} from "../providers/difficulty-level/difficulty-level";
import {LoaderService} from "../providers/loader-service/loader-service";
import { GoogleAnalytics } from '@ionic-native/google-analytics';

import {
  Push,
  PushToken
} from '@ionic/cloud-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';

  pages: Array<{title: string, id?: any, component?: any, pageFile?: string, pageCode?: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar,
              public splashScreen: SplashScreen, private localNotifications: NotificationProvider,
              private appStorage: AppStorageProvider, private http: Http, private activityCategoryProvider: ActivityCategoryProvider,
              private alertProvider: AlertProvider, private activityProvider: ActivityProvider,
              private difficultyLevelProvider: DifficultyLevelProvider, private loaderService: LoaderService,
              private ga: GoogleAnalytics, public push: Push) {
    this.initializeApp(platform, statusBar);
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Αρχική', component: "HomePage"},
      { title: 'Ας μάθουμε τα βασικά', component: "BasicInfoPage"},
      { title: 'Τι να προσέξουμε', component: "InfoListPage", pageCode: "page_tips_list", pageFile: "pages/tips_list.json" },
      { title: 'Ασκήσεις - Δραστηριότητες', component: "ActivityCategoriesPage"},
      { title: 'Λέμε Ιστορίες', id: "stories"},
      { title: 'Ιστορικό', component: "StatisticsPage" },
      { title: 'Ρυθμίσεις ειδοποιήσεων', component: "NotificationsPage" },
      { title: 'Βοήθεια', component: "HelpPage"},
      { title: 'About', component: "AboutPage"}
    ];



  }

  initializeApp(platform, statusBar) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.splashScreen.hide();

      if (platform.is('android')) {
        statusBar.overlaysWebView(false);
        statusBar.backgroundColorByHexString("#002984");
        statusBar.styleBlackOpaque();
      } else {
        statusBar.overlaysWebView(true);
        statusBar.styleDefault();
      }

      this.localNotifications.listenForNotificationClicks();

      // this.appStorage.get('notifications_scheduled').then(data => {
      //   let notificationsScheduled = JSON.parse(data);
      //   if(!notificationsScheduled && platform.is('cordova')) {
      //     console.log("Notifications not scheduled. Scheduling...");
      //     this.localNotifications.scheduleNextNotification();
      //   }
      // })
      if(platform.is('cordova')) {
        this.localNotifications.scheduleNextNotification();
        this.setUpGoogleAnalytics();


        this.push.register().then((t: PushToken) => {
          return this.push.saveToken(t);
        }).then((t: PushToken) => {
          console.log('Token saved:', t.token);
        });

        this.push.rx.notification()
          .subscribe((msg) => {
            //alert(msg.title + ': ' + msg.text);
          });
      }
    });


  }

  openPage(page) {
    switch(page.id) {
      case "stories":
        this.loadStoriesPage();
        break;
      default:
        this.nav.push(page.component, {pageData: page});
        break;
    }

  }

  loadStoriesPage() {
    this.getDifficultyLevelsForCategoryAndLoadPage("stories");
  }

  getDifficultyLevelsForCategoryAndLoadPage(categoryId: string):any {
    this.activityCategoryProvider.getActivitiesForCategory(categoryId).subscribe(activitiesIds => {
      if(activitiesIds != null) {
        this.activityProvider.getActivitiesByIds(activitiesIds).subscribe(activities => {
          console.log(activities);
          this.getDifficultyLevelsForActivitiesAndLoadPage(activities, categoryId);
        }, error => {
          this.handleError(error);
        });
      }
    }, error => {
      this.handleError(error);
    });
  }

  getDifficultyLevelsForActivitiesAndLoadPage(activities: any, categoryId) {
    this.difficultyLevelProvider.getDifficultyLevelsForActivities(activities).then(difficultyLevels => {
      // this.loaderService.hideLoader();
      this.nav.push("DifficultyLevelsPage", {levels: difficultyLevels, categoryId: categoryId, activities: activities});
    });
  }

  handleError(error) {
    console.log(error);
    this.loaderService.hideLoader();
  }

  setUpGoogleAnalytics() {
    this.ga.startTrackerWithId('UA-31632742-19')
      .then(() => {
        console.log('Google analytics is ready now');
        this.ga.trackView('test');
        // Tracker is ready
        // You can now track pages or set additional information such as AppVersion or UserId
      })
      .catch(e => console.log('Error starting GoogleAnalytics', e));
  }
}
