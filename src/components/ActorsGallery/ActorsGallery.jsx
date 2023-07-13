import { Box, ImageListItem, ImageListItemBar } from "@mui/material";
import API from "../../services/TMDB/API";

export function ActorsGallery({ cast }) {
	//TODO: доделать
	return (
		<Box sx={{ width: "100%", height: "400px", backgroundColor: "grey", mb: 6 }}>
			<ImageListItem sx={{ width: "200px" }}>
				<img
					style={{
						width: "100%",
						height: "auto",
					}}
					src={`${API.URL.IMG.W300}/mflBcox36s9ZPbsZPVOuhf6axaJ.jpg`}
					alt={"Актер"}
					loading="lazy"
				/>
				<ImageListItemBar title={"Актер"} subtitle={"Роль"} />
			</ImageListItem>
		</Box>
	);
}
