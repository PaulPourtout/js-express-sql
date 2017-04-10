const projects = [

 {
    id: 0,
    userId: 3, // le repo doit correspondre un utilisateur du tableau 'users'
    name: 'To-do list project',
    githubUrl : 'https://github.com/PaulPourtout/todo-list',
    githubRepo : 'todo-list',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
 },
 {
    id: 1,
    userId: 0, // le repo doit correspondre un utilisateur du tableau 'users'
    name: 'Bet & Go',
    githubUrl : 'https://github.com/PaulPourtout/Travel',
    githubRepo : 'Travel',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
 },
 {
    id: 2,
    userId: 6, // le repo doit correspondre un utilisateur du tableau 'users'
	name: 'Pomodoro',
    githubUrl : 'https://github.com/PaulPourtout/pomodoro',
    githubRepo : 'Pomodoro',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
   id: 3,
   userId: 8, // le repo doit correspondre un utilisateur du tableau 'users'
   name: 'JS Calendar',
   githubUrl : 'https://github.com/PaulPourtout/todo-list',
   githubRepo : 'todo-list',
   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
   id: 4,
   userId: 5, // le repo doit correspondre un utilisateur du tableau 'users'
   name: 'To-do list project',
   githubUrl : 'https://github.com/PaulPourtout/todo-list',
   githubRepo : 'todo-list',
   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
   id: 5,
   userId: 2, // le repo doit correspondre un utilisateur du tableau 'users'
   name: 'Bet & Go',
   githubUrl : 'https://github.com/PaulPourtout/Travel',
   githubRepo : 'Travel',
   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
   id: 6,
   userId: 4, // le repo doit correspondre un utilisateur du tableau 'users'
   name: 'Pomodoro',
   githubUrl : 'https://github.com/PaulPourtout/pomodoro',
   githubRepo : 'Pomodoro',
   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
  id: 7,
  userId: 1, // le repo doit correspondre un utilisateur du tableau 'users'
  name: 'JS Calendar',
  githubUrl : 'https://github.com/PaulPourtout/todo-list',
  githubRepo : 'todo-list',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
   id: 8,
   userId: 9, // le repo doit correspondre un utilisateur du tableau 'users'
   name: 'To-do list project',
   githubUrl : 'https://github.com/PaulPourtout/todo-list',
   githubRepo : 'todo-list',
   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
   id: 9,
   userId: 10, // le repo doit correspondre un utilisateur du tableau 'users'
   name: 'Bet & Go',
   githubUrl : 'https://github.com/PaulPourtout/Travel',
   githubRepo : 'Travel',
   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
   id: 10,
   userId: 0, // le repo doit correspondre un utilisateur du tableau 'users'
   name: 'Pomodoro',
   githubUrl : 'https://github.com/PaulPourtout/pomodoro',
   githubRepo : 'Pomodoro',
   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
  id: 11,
  userId: 3, // le repo doit correspondre un utilisateur du tableau 'users'
  name: 'JS Calendar',
  githubUrl : 'https://github.com/PaulPourtout/todo-list',
  githubRepo : 'todo-list',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
  id: 12,
  userId: 5, // le repo doit correspondre un utilisateur du tableau 'users'
  name: 'To-do list project',
  githubUrl : 'https://github.com/PaulPourtout/todo-list',
  githubRepo : 'todo-list',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
  id: 13,
  userId: 2, // le repo doit correspondre un utilisateur du tableau 'users'
  name: 'Bet & Go',
  githubUrl : 'https://github.com/PaulPourtout/Travel',
  githubRepo : 'Travel',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
  id: 14,
  userId: 4, // le repo doit correspondre un utilisateur du tableau 'users'
  name: 'Pomodoro',
  githubUrl : 'https://github.com/PaulPourtout/pomodoro',
  githubRepo : 'Pomodoro',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
 id: 15,
 userId: 1, // le repo doit correspondre un utilisateur du tableau 'users'
 name: 'JS Calendar',
 githubUrl : 'https://github.com/PaulPourtout/todo-list',
 githubRepo : 'todo-list',
 description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}
];

module.exports = projects;
