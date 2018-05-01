class TabsItem {
  constructor($element) {
    this.element = $($element);
  }
  select() {
    this.element.('tabs-item-selected');
  }
  deselect() {
    this.element.removeClass('tabs-item-selected');
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = $(element);
    this.tabs = parent
    this.tabsItem = parent.getTab(this.element.data('tab'));
    this.tabsItem = new TabsItem(this.tabsItem);
    this.element.click(() => {
      this.tabs.updateActive(this);
      this.select();
    });
  };
  select() {
    this.element.addClass('tabs-link-selected');
    this.tabsItem.select();
  }
  deselect() {
    this.element.removeClass('tabs-link-selected')
    this.tabsItem.deselect();
  }
}

class TabsLink {
  constructor($element, parent) {
    // Attach the element to this instance of the TabsLink class
    this.$element = $($element);
    // Attach Tabs (parent) to this instance of the TabsLink class
    this.tabs = parent;
    /* Use the getTab method on the parent to find the corresponding TabItem for this link
       hint: use the data-tab attribute */
    this.tabsItem = parent.getTab(this.$element.data('tab'));
    // Reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.tabsItem = new TabsItem($(this.tabsItem));
    /* Add an click event to the main element, this will update the active tab on the parent, 
       and should call select on this tab */
    this.element.click(() => {
      this.tabs.updateActive(this);
      this.select();

    });
  };

  select() {
    // add selected class to this link
    // select the associated tab item
    this.$element.addClass('tabs-link-selected');
    this.tabsItem.select()
  }

  deselect() {
    // deselect this link
    // deselect the associated tab item
    this.$element.removeClass('tabs-link-selected');
    this.tabsItem.deselect()
  }
}

class Tabs {
  constructor($element) {
    this.$element = $($element);
    this.links = this.$element.find('.tabs-link');
    this.links = this.links.map((index, link) => {
      return new TabsLink($(link), this);
    });
    this.activeLink = this.links[0];
    this.init();
  }
  init() {
    this.activeLink.select();
  }
  updateActive(newActive) {
    this.activeLink.deselect();
    this.activeLink = ActiveNew;
  }
  getTab(data) {
    return this.element.find(`.tabs-item[data-tab="${data}"]`)
  }
}
let tabs = $('.tabs');
tabs = tabs.map(function (index, element) {
  new Tabs(element);
});