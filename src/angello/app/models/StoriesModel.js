/**
 * Created by wanjie on 2015/11/17.
 */
angular.module("Angello.Common")
    .service("StoriesModel", function ($http) {//, EndpointConfigService, UtilsService
        var service = this;
        var MODEL = "/stories/";

        //service.all = function () {
        //    return $http.get(EndpointConfigService.getUrl(
        //        MODEL + EndpointConfigService.getCurrentFormat()
        //    )).then(function (result) {
        //        return UtilsService.objectToArray(result);
        //    });
        //};
        //
        //service.fetch = function (story_id) {
        //    return $http.get(EndpointConfigService.getUrlForId(MODEL, story_id))
        //        .then(function (result) {
        //            return result;
        //        });
        //};
        //
        //service.create = function (story) {
        //    return $http.post(EndpointConfigService.getUrl(MODEL + EndpointConfigService.getCurrentFormat()), story);
        //};
        //
        //service.update = function (story_id, story) {
        //    return $http.put(EndpointConfigService.getUrlForId(MODEL, story_id), story);
        //};
        //
        //service.destroy = function (story_id) {
        //    return $http.delete(EndpointConfigService.getUrlForId(MODEL, story_id));
        //};

        service.stories = [
            {
                "assignee": "1",
                "criteria": "活动页写完!",
                "description": "这是个测试",
                "id": "1",
                "reporter": "2",
                "status": "还没做的",
                "title": "第一个任务",
                "type": "新功能",
                "sClass": "Feature"
            },
            {
                "assignee": "2",
                "criteria": "好了!",
                "description": "测试一些东西",
                "id": "2",
                "reporter": "1",
                "status": "正在做的",
                "title": "第二个任务",
                "type": "改善",
                "sClass": "Enhancement"
            },
            {
                "assignee": "3",
                "criteria": "管用！",
                "description": "继续测试",
                "id": "3",
                "reporter": "3",
                "status": "正在做的",
                "title": "第三个任务",
                "type": "Bug修复",
                "sClass": "Bug"
            }
        ];
    });