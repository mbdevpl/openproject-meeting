function checkAllInColumn(selector, column_id, checked) {
  jQuery('#' + selector + ' input:checkbox[id^=' + column_id + ']').not(':disabled').each(function() {
    this.checked = checked;
  });
}