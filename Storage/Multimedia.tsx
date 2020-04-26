import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';

export class Multimedia {
	permiso = false;

	private ValidarPermisos = async () => {
		let permisos = await MediaLibrary.getPermissionsAsync();
		if (permisos.canAskAgain) {
			if (permisos.status == 'granted') {
				//todo esta bien
				//MediaLibrary.requestPermissionsAsync();
				this.permiso = true;
			} else {
				await MediaLibrary.requestPermissionsAsync();
			}
		} else {
			alert('Por favor conceda permisos de almacenamiento para activar esta funcion');
		}
	};

	Fotos = async () => {
		let imagen = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images
		});
		console.log(imagen);
	};

	Videos = async () => {
		let video = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Videos
		});
		console.log(video);
	};
}

/*export class Multimedia {
	permiso = false;

	private ValidarPermisos = async () => {
		let permisos = await MediaLibrary.getPermissionsAsync();
		if (permisos.canAskAgain) {
			if (permisos.status == 'granted') {
				//todo esta bien
				//MediaLibrary.requestPermissionsAsync();
				this.permiso = true;
			} else {
				await MediaLibrary.requestPermissionsAsync();
			}
		} else {
			alert('Por favor conceda permisos de almacenamiento para activar esta funcion');
		}
	};

	getFotos = () => {};

	getVideos = () => {};

	getAll = async () => {
		await this.ValidarPermisos();

		if (this.permiso) {
			let Album = await MediaLibrary.getAlbumsAsync();
			console.log('----------------------');
			let i = await MediaLibrary.getAlbumAsync(Album[15].title);
			console.log(i);
			console.log('----------------------');
			let medie = await MediaLibrary.getAssetsAsync({ album: i.id, mediaType: 'video' });
			console.log(medie);
			console.log('----------------------');
		} else {
			console.log('Error en los permisos');
		}
	};
}*/
