/**
 * Created by wanjie on 2015/11/21.
 */
describle("StoryboardCtrl", function () {
    var ctrl;

    beforeEach(module("Angello.Storyboard"));
    beforeEach(inject(function($controller) {
        ctrl = $controller("StoryboardCtrl", {});
        ctrl.detailsForm = {
            $setPristine: function () {},
            $setUntouched: function () {}
        };
    }));

    it("should reset the form", function () {
        ctrl.currentStory = ctrl.editedStory = {"assignee": "1"};

        ctrl.resetForm();

        expect(ctrl.currentStory).toBeNull();
        expect(ctrl.editedStory).toEqual({});
    });

    it("should delete a story", function () {
        var story = ctrl.stories[0];

        ctrl.deleteStory(story.id);

        expect(ctrl.stories).not.toContain(story);
    });
});