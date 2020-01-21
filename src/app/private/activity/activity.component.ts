import { Component, OnInit } from '@angular/core';
import {DAOService} from '../../shared/dao.service';
import {REST_URL_ACTIVITY} from '../../shared/REST_API_URLs';
import {Activity} from '../../shared/models/activity.model';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html'
})
export class ActivityComponent implements OnInit {

  activities: Activity[] = new Array<Activity>();
  hasLoaded: boolean;

  constructor(private dao: DAOService) { }

  ngOnInit() {
    this.hasLoaded = false;

    this.dao.getObjects(REST_URL_ACTIVITY).subscribe((data: any) => {
      for (const activity of data)
        this.activities.push(new Activity(activity));
      this.hasLoaded = true;
    });
  }

}
