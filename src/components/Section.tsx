const Section = ({ header, body, id }: { header: string, body: JSX.Element, id?: string }) => (
    <section id={id} className={id === 'music-videos' ? 'section mt-5 mb-5' : 'section block mt-5 mb-5'}>
        <h3 className='text-center mb-3'>{header}</h3>
        {body}
    </section>
)

export default Section