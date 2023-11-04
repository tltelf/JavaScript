import { DivComponent } from '../../common/div-component';
import { Card } from '../card/card';
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
      : `<h3>Найдено книг - ${this.state.numFound}</h3>`;
    for (const card of this.state.list) {
      this.el.append(new Card(this.appState, card).render());
    }
    return this.el;
  }
}
