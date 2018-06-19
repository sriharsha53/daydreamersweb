import { Component } from '@angular/core';
import {FeedPage} from '../feed/feed';
import {GamePage} from '../game/game';
import {BookmarksPage} from '../bookmarks/bookmarks';
import {SettingsPage} from '../settings/settings';
import {ProfilePage} from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FeedPage;
  tab2Root = GamePage;
  tab3Root = BookmarksPage;
  tab4Root = SettingsPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
