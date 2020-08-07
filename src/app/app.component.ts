import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'windowdemo';
  count = 0;
  activeWindows = [];
  currentActiveWindow = null;
  activeWindowId = null; // for highlight

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    const posLeft = this.currentActiveWindow.offsetLeft;
    const posTop = this.currentActiveWindow.offsetTop;
    if (event.key === 'ArrowUp') {
      this.currentActiveWindow.style.marginTop = (posTop - 58) + 'px';
      console.log(event.key);
    }
    if (event.key === 'ArrowDown') {
      this.currentActiveWindow.style.marginTop = (posTop + 58) + 'px';
      console.log(event.key);
    }
    if (event.key === 'ArrowLeft') {
      this.currentActiveWindow.style.marginLeft = (posLeft - 58) + 'px';
      console.log(event.key);
    }
    if (event.key === 'ArrowRight') {
      this.currentActiveWindow.style.marginLeft = (posLeft + 58) + 'px';
      console.log(event.key);
    }
    if (event.key === 'Delete') {
      this.currentActiveWindow.parentNode.removeChild(this.currentActiveWindow);
    }
  }

  addWindow() {
    const window = {
      id: `window${this.count}`,
      index: this.count
    };
    this.activeWindows.push(window);
    this.count = this.count + 1;
  }

  setWindowListener(id: string) {
    this.currentActiveWindow = document.getElementById(id);
    this.activeWindowId = id; // for highlight
  }
}
