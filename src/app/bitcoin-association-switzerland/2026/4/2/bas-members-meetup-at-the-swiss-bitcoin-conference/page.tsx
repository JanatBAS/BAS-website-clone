import BlogPostLayout from "@/components/BlogPostLayout";

const post = {
  title: "BAS Members Meetup at the Swiss Bitcoin Conference",
  date: "2 April 2026",
  author: "Lisa Tscherry",
  authorId: "lisa-tscherry",
  featuredImage: "/images/branding/bas-people.jpg",
  olderPost: {
    title:
      "Statement on the 12-Point Program for a Forward-Looking Digital Financial Center",
    href: "/bitcoin-association-switzerland/2025/12/8/statement-on-12-point-program",
  },
};

export default function BASMembersMeetupAtTheSwissBitcoinConferencePostPage() {
  return (
    <BlogPostLayout post={post}>
      <p>
        <strong>Dear BAS members,</strong>
      </p>

      <p>
        We have decided resp. voted to host a series of member meetups
        alongside selected Bitcoin conferences this year.
      </p>

      <p>
        Our first stop will be at the Swiss Bitcoin Conference in Kreuzlingen.
      </p>

      <p>We would like to invite you to a simple member get-together:</p>

      <p>
        <strong>Date:</strong> Saturday, 25 April 2026
        <br />
        <strong>Time:</strong> from 17:00
        <br />
        <strong>Location:</strong> Kreuzlingen (at the conference venue, exact
        spot to be shared)
      </p>

      <p>
        This will be an informal meetup to connect with fellow members,
        exchange ideas, and spend some time together during the conference.
      </p>

      <p>
        Save the date and feel free to join us if you are attending.
      </p>

      <p>
        Registration is required for catering planning:{" "}
        <a
          href="https://www.meetup.com/de-de/bitcoin-meetup-switzerland/events/314034144/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meetup registration
        </a>
      </p>

      <p>
        Conference information:{" "}
        <a
          href="https://swiss-bitcoin-conference.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          swiss-bitcoin-conference.com
        </a>
      </p>

      <p>Looking forward to seeing many of you there.</p>

      <p>
        Lisa
        <br />
        on behalf of the BAS Board
      </p>
    </BlogPostLayout>
  );
}
