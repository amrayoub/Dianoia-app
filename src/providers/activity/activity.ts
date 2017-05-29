import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {ApiCallsProvider} from "../api-calls/api-calls";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/forkJoin";
import {AppStorageProvider} from "../app-storage/app-storage";

/*
  Generated class for the ActivityProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ActivityProvider {

  activities: [any];
  currentDateFormatted: string;

  constructor(public http: Http, private apiCalls: ApiCallsProvider, private appStorage: AppStorageProvider) {
    this.getAllActivities().subscribe(data => {
      this.activities = data;
    });

    const currentDate = new Date();
    this.currentDateFormatted = currentDate.getDay() + "-" + currentDate.getMonth() + "-" + currentDate.getFullYear();
  }

  public getAllActivities(): Observable<any> {
    return this.apiCalls.getHttpCall("activities_all", () => {
      return this.http.get("assets/data_DB/activities/activities.json")
        .map(res => res.json());
    });
  }

  public getRandomActivity() {
    return new Promise((resolve, reject) => {
      if (this.activities.length == 0) {
        this.getAllActivities().subscribe(activities => {
          let randomActivity = activities[Math.floor(Math.random()*activities.length)];
          resolve(randomActivity);
        });
      } else {
        let randomActivity = this.activities[Math.floor(Math.random()*this.activities.length)];
        resolve(randomActivity);
      }
    });
  }

  public getActivityById(activityId): Promise<any> {
    return new Promise((resolve, reject) => {
      if(this.activities.length == 0) {
        this.getAllActivities().subscribe(activities => {
          for(let activity of activities) {
            if(activity.id == activityId) {
              resolve(activity);
            }
          }
        });
      } else {
        for(let activity of this.activities) {
          if(activity.id == activityId) {
            resolve(activity);
          }
        }
      }
    });
  }

  // public getActivitiesByIds(activityIds: [string]): Observable<any> {
  //   let activities = [];
  //   return Observable.create(observer => {
  //     for (let activityId of activityIds) {
  //       this.getActivityById(activityId).then(activity => {
  //         activities.push(activity);
  //       });
  //     }
  //     observer.next(activities);
  //     observer.complete();
  //   });
  // }

  public getActivitiesByIds(activityIds: [string]): Observable<any> {
    let activities = [];
    activityIds.forEach(( activityId, index ) => {
      activities.push(this.getActivityById(activityId));
    });
    return Observable.forkJoin(activities);
  }

  public userHasCompletedActivityForToday() {
    return this.appStorage.get(this.currentDateFormatted);
  }

  public setActivityCompletedForToday() {
    return this.appStorage.set(this.currentDateFormatted, true);
  }
}
