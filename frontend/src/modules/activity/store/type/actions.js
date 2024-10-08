import { ActivityTypeService } from '@/modules/activity/services/activity-type-service';

export default {
  createActivityType(data) {
    return ActivityTypeService.create(data).then(
      (types) => {
        this.types = types;
        return Promise.resolve(types);
      },
    );
  },
  updateActivityType(key, data) {
    return ActivityTypeService.update(key, data).then(
      (types) => {
        this.types = types;
        return Promise.resolve(types);
      },
    );
  },
  deleteActivityType(key) {
    return ActivityTypeService.delete(key).then((types) => {
      this.types = types;
      return Promise.resolve(types);
    });
  },
  setTypes(types) {
    this.types = types;
  },
};
