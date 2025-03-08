function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
	this.subject = '';
	this.excluded = false;
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if (this.marks) {
		this.marks.push(...marksToAdd);
	} else {
		console.log('Студент отчислен.')
	}
}

Student.prototype.getAverage = function() {
	if (!this.marks || this.marks.length === 0) {
		return 0;
	} else {
		const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
		return sum / this.marks.length;
	}
}

Student.prototype.exclude = function(reason) {
	this.excluded = reason;
	this.subject = undefined;
	this.marks = undefined;
}