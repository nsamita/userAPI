module.exports ={
	async fetchSingle(modelName, val){

		return await modelName.findAll({
			where:{
				id:val
			}
		})
	},

	async validatePhone(modelName, val){

		return await modelName.findAll({
			where:{
				phone:val
			}
		})
	},

	async validateEmail(modelName, val){

		return await modelName.findAll({
			where:{
				email:val
			}
		})
	},

	async multiple(modelName, obj){
		return await modelName.findAll({
			where:obj
		})
	},

	async transform(name){
		var firstname = name;
		var splitName = firstname.split(' ');
		var newName = "";

		for (var i = 0; i < splitName.length; i++) {
			newName += ' '+splitName[i].charAt(0).toUpperCase() + splitName[i].slice(1);
		}

		return  newName;
	}
}