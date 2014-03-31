angular.module('OtlPlusServices')
  .factory('Types', function() {
    var PROJECTS = [
      {name: 'These are', value: '100000', taskType: 1},
      {name: 'some fake', value: '100001', taskType: 1},
      {name: 'project codes.', value: '100002', taskType: 2},
      {name: "Real ones can't", value: '100003', taskType: 2},
      {name: 'be posted on github.', value: '100004', taskType: 2},
    ];

    var TASKS = {
      1: [
        {name: 'Fake', value: '1.0'},
        {name: 'Codes', value: '2.0'},
        {name: 'Yaaaay', value: '3.0'}
      ],
      2: [
        {name: 'More Fake', value: '1.0'},
        {name: 'Codes2', value: '2.0'},
        {name: 'Yaaaay2', value: '3.0'}
      ]
    };

    function projects() { return PROJECTS; }

    function tasks() { return TASKS; }

    function matchProjectsFor(timesheet) {
      return timesheet ? timesheet.map(function(row) {
        row.project = row.project ? PROJECTS.filter(function(proj) { return proj.value == row.project.value })[0] : null;
        return row;
      }) : timesheet;
    }

    function matchTasksFor(timesheet) {
      return timesheet ? timesheet.map(function(row) {
        row.task = row.task ? TASKS[row.project.taskType].filter(function(t) { return t.value == row.task.value })[0] : null;
        return row;
      }) : timesheet;
    }

    function matchProjectsAndTasksFor(timesheet) {
      return matchTasksFor(matchProjectsFor(timesheet));
    }

    return {
      projects: projects,
      tasks: tasks,
      matchProjectsFor: matchProjectsFor,
      matchTasksFor: matchTasksFor,
      matchProjectsAndTasksFor: matchProjectsAndTasksFor
    };
  });
