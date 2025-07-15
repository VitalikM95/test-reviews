type CardItem = {
  logo: string
  text: string
  avatar: string
  name: string
  position: string
}

type CardProps = {
  cardItem: CardItem
}

export const Card = ({ cardItem }: CardProps) => {
  return (
    <div className="bg-white flex flex-col justify-between rounded-lg shadow-md p-5 w-full h-[400px] border border-gray-200">
      <div className="h-18 flex items-center">
        <img
          className="max-h-full max-w-full object-contain"
          src={cardItem.logo}
          alt="logo"
        />
      </div>
      <p className="text-gray-500 h-40 text-md leading-8 line-clamp-5">
        {cardItem.text}
      </p>
      <div
        className="text-start h-10 text-8xl text-gray-300 rotate-180"
        style={{ fontFamily: 'sans-serif' }}
      >
        &ldquo;
      </div>
      <div className="flex">
        <img className="h-14" src={cardItem.avatar} alt="avatar" />
        <div className="mx-4">
          <h5 className="font-bold text-xl">{cardItem.name}</h5>
          <p className="font-semibold max-h-12 line-clamp-2">
            {cardItem.position}
          </p>
        </div>
      </div>
    </div>
  )
}
