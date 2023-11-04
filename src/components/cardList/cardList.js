import { DivComponent } from '../../common/div-component';
import './cardList.css';

export class CardList extends DivComponent {
  constructor(appState, state) {
    super();
    this.appState = appState;
    this.state = state;
  }

  render() {
    this.el.innerHTML = this.state.loading
      ? `<div class="card-list__loader">Загрузка данных...</div>`
      : `<h3>Найдено книг - ${this.state.list.length}</h3>`;
    return this.el;
  }
}
