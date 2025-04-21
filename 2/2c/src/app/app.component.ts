import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';   // Import FormsModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Add this line if your project uses standalone components
  imports: [CommonModule, FormsModule] // Import the required modules here
})
export class AppComponent {
  title = 'My Simple Angular App';
  items: string[] = ['my', 'name', 'is', 'aryan'];
  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}