import {Card, CardHeader, CardBody, CardFooter, Button, Link} from "@nextui-org/react";
import {Image} from "@nextui-org/react";

interface CardInterface {
  title: string;
  cover: string;
  url: string;
}

const MyCard = ({ title, cover, url }: CardInterface) => {
  return (
	<Link href={url} isExternal >
		<Card>
			<Image
				alt="Card background"
				className="object-cover rounded-xl"
				src={cover}
				width={270}
			/>
		</Card>
	</Link>
  );
}

export default MyCard;