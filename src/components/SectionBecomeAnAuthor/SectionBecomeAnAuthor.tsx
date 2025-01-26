import { FC } from 'react'
import ButtonPrimary from '@/components/Button/ButtonPrimary'
import Image, { StaticImageData } from 'next/image'
import MyImage from '../MyImage'

export interface SectionBecomeAnAuthorProps {
	className?: string
	rightImg?: string | StaticImageData
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = ({
	className = '',
	rightImg = '/images/BecomeAnAuthorImg.png',
}) => {
	return (
		<div
			className={`nc-SectionBecomeAnAuthor not-prose relative flex flex-col items-center lg:flex-row ${className}`}
		>
			<div className="mb-14 flex-shrink-0 lg:mb-0 lg:mr-10 lg:w-2/5">
				<span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
				Thay đổi khả năng lập kế hoạch của bạn
				</span>
				<h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
				Trở thành tác giả và chia sẻ những câu chuyện tuyệt vời của bạn
				</h2>
				<span className="mt-8 block text-neutral-500 dark:text-neutral-400">					
					Trở thành tác giả bạn có thể kiếm thêm thu nhập bằng cách viết bài. Đọc
					và chia sẻ những quan điểm mới về bất kỳ chủ đề nào. của mọi người
					Chào mừng.
				</span>
				<ButtonPrimary className="mt-8">Become an author</ButtonPrimary>
			</div>
			<div className="flex-grow">
				<MyImage
					alt="hero"
					sizes="(max-width: 768px) 100vw, 50vw"
					src={rightImg}
				/>
			</div>
		</div>
	)
}

export default SectionBecomeAnAuthor
