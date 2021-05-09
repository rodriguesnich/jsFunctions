// recive a unix timestamp in miliseconds and returns a android based date in name structure
// yyyymmdd_hhmmss
function unixToPhotoName(unixMiliSecondStamp) {
	let unixDateObj = new Date(unixMiliSecondStamp)

	let newPhotoName = ""

	newPhotoName += unixDateObj.getFullYear() // Returns the year
	newPhotoName += (unixDateObj.getMonth()+1).toString().padStart(2, '0') // Returns the month (from 0-11) [needs +1]
	newPhotoName += (unixDateObj.getDate()).toString().padStart(2, '0') //day of the month (from 1-31)
	newPhotoName += "_"
	newPhotoName += (unixDateObj.getHours()).toString().padStart(2, '0') // Returns the hour
	newPhotoName += (unixDateObj.getMinutes()).toString().padStart(2, '0') // Returns the minutes
	newPhotoName += (unixDateObj.getSeconds()).toString().padStart(2, '0') // Returns the seconds

	return newPhotoName
}