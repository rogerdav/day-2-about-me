'use strict';


alert('Answer all question with a Yes or No. Y/N is also acceptable.');



var birthplace = prompt('Was Roger born in America?');
console.log('birthplace',birthplace);

birthplace = birthplace.toLowerCase();
if (birthplace === 'y' || birthplace === 'yes') {
  alert('You are incorrect!');
} else if (birthplace === 'n' || birthplace === 'no') {
  alert('What gave it away? The accent');
} else {
  alert('Not a valid answer.');
}

var children = prompt('Does Roger have children?');
console.log('children',children);

children = children.toLowerCase();
if (children === 'y' || children === 'yes') {
  alert('Wow lucky guess.');
} else if (children === 'n' || children === 'no') {
  alert('Bummer you got that wrong.');
} else {
  alert('Not a valid answer.');
}



var married = prompt('Is Roger married?');
console.log('married',married);

married = married.toLowerCase();

if (married === 'y' || married === 'yes') {
  alert('You got it, he is off the market.');
} else if (married === 'n' || married === 'no') {
  alert('Awwwwww you got that wrong');
} else {
  alert('Not a valid answer.');
}

var lifechanges = prompt('Is Roger making a major life change?');
console.log('life changes',lifechanges);

lifechanges = lifechanges.toLowerCase();

if (lifechanges === 'y' || lifechanges === 'yes') {
  alert('Hell yes he is, hopefully it works out well.');
} else if (lifechanges === 'n' || lifechanges === 'no') {
  alert('Sorry that you don\'t think so');
} else {
  alert('Not a valid answer.');
}

var likes = prompt('Does Roger Like coding?');
console.log('Likes coding',likes);

likes = likes.toLowerCase();

if (likes === 'y' || likes === 'yes') {
  alert('Time will tell');
} else if (likes === 'n' || likes === 'no') {
  alert('Don\'t be such a negative person!');
} else {
  alert('Not a valid answer.');
}
