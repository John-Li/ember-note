import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  user: DS.belongs_to('user'),
  notes: DS.has_many('note')
});
