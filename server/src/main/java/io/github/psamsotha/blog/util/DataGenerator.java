package io.github.psamsotha.blog.util;


import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Set;
import java.util.concurrent.ThreadLocalRandom;


/**
 * @author Paul Samsotha.
 */
public class DataGenerator {

    private static final String FILE = "src/main/resources/data.sql";


    public static void generateData() throws Exception {
        try (PrintWriter writer = new PrintWriter(new BufferedWriter(new FileWriter(FILE)))) {
            printUsers(writer);
            writer.println();

            printPosts(writer);
            writer.println();

            printComments(writer);
            writer.println();

            Tuple tuple = getPostTag();

            printTag(tuple, writer);
            writer.println();

            printPostTag(tuple, writer);
            writer.println();
        }
    }


    private static final String USER_TMPL
            = "insert into users (id, name, username, password, location, date_created, email, avatar_url) "
            + "values ({1}, {2}, {3}, {4}, {5}, {6}, {7}, {8});";

    private static final String[][] USERS = {
            {"Paul Samsotha", "peeskillet", "Phnom Penh"},
            {"Lebron James", "kingjames", "Cleveland, OH"},
            {"Kobe Bryant", "blackmamba", "Los Angeles"},
            {"Steph Curry", "babayface", "Oakland, CA"},
            {"Kevin Durant", "durantula", "Oakland, CA"},
            {"Klay Thompson", "splashbro", "Oakland, CA"},
            {"Micheal Jordan", "thegoat", "Chicago, IL"},
            {"James Harden", "thebeard", "Houston, "},
            {"Shaquille Oneal", "shaqdiesel", "Orlando, FL"},
            {"Vince Carter", "halfamazing", "Toronto, CN"}
    };

    private static void printUsers(PrintWriter writer) throws Exception {
        int counter = 0;
        String row;
        for (String[] user: USERS) {
            row = USER_TMPL
                    .replaceFirst("\\{1\\}", String.valueOf(++counter))
                    .replaceFirst("\\{2\\}", "'" + user[0] + "'")
                    .replaceFirst("\\{3\\}", "'" + user[1] + "'")
                    .replaceFirst("\\{4\\}", "'secret'")
                    .replaceFirst("\\{5\\}", "'" + user[2] + "'")
                    .replaceFirst("\\{6\\}", "'" + getRandomDate() + "'")
                    .replaceFirst("\\{7\\}", "'" + user[1] + "@email.com'")
                    .replaceFirst("\\{8\\}", "'http://lorempixel.com/200/200/people/" + counter + "'");
            writer.println(row);
        }
    }


    private static final String POST_TMPL
            = "insert into post (id, user_id, date_created, title, content) values ({1}, {2}, {3}, {4}, {5});";

    private static final String[] POST_TITLES = {
            "How the Grinch Stole The White House", "Getting Started with Angular",
            "Getting Started with ReactJS", "Getting Started with Spring Boot",
            "How to Turn Your Computer On", "How to Turn Your Computer Off",
            "Why You Shouldnt Eat Laying Down", "How to Post on Stack Overflow",
            "Why Angular Is So Cool", "How ReactJS Changed My Life",
            "Why Waking Up at 5am is Awesome", "How use NgRx with Angular",
            "Using Redux with React", "Getting Started with Jersey",
            "Getting the Most Bang for Your Buck", "How to Convince Elon Musk to Take You to Mars",
            "Vampires Originated From Aliens Mixing Human DNA with Mosquito DNA",
            "Be Happy With What You Have, But Always Strive for More",
            "How To Read 10 Books in 10 Days", "How to Create an Array in Java"
    };

    private static final int POSTS_PER_USER = 10;

    private static void printPosts(PrintWriter writer) throws Exception {
        final Random random = new Random();
        String row;
        String id;
        for (int i = 0; i < USERS.length; i++) {
            for (int j = 0; j < POSTS_PER_USER; j++) {
                id = i == 0
                        ? String.valueOf(j)
                        : String.valueOf(i) + String.valueOf(j);
                row = POST_TMPL
                        .replaceFirst("\\{1\\}", String.valueOf(Integer.parseInt(id) + 1))
                        .replaceFirst("\\{2\\}", String.valueOf(i + 1))
                        .replaceFirst("\\{3\\}", "'" + getRandomDate() + "'")
                        .replaceFirst("\\{4\\}", "'" + POST_TITLES[random.nextInt(POST_TITLES.length - 1)] + "'")
                        .replaceFirst("\\{5\\}", CONTENT);
                writer.println(row);
            }
        }
    }

    private static final String COMMENT_TMPL
            = "insert into comment (id, date_created, post_id, user_id, content) "
            + "values ({1}, {2}, {3}, {4}, {5});";

    private static final void printComments(PrintWriter writer) throws Exception {
        final String[] comments  = {
            "Awesome article!", "Good stuff.", "You are the man!",
            "Ive been looking everywhere for this", "You saved my life.",
            "You rock dude.", "This is the best article on the topic",
            "Knowledge is power. Keep it going!", "This should be in the documentation.",
            "Great! I owe you a beer.", "Finally, I found an answer."
        };

        final Random random = new Random();

        String row;
        String id;
        for (int i = 0; i < 3; i++) {
            for (int j = 1; j < (USERS.length * POSTS_PER_USER); j++) {
                id = i == 0
                        ? String.valueOf(j)
                        : j < 10
                                ? String.valueOf(i) + "0" + String.valueOf(j)
                                : String.valueOf(i) + String.valueOf(j);
                row = COMMENT_TMPL
                        .replaceFirst("\\{1\\}", id)
                        .replaceFirst("\\{2\\}", "'" + getRandomDate() + "'")
                        .replaceFirst("\\{3\\}", String.valueOf(j))
                        .replaceFirst("\\{4\\}", String.valueOf(random.nextInt(9) + 1))
                        .replaceFirst("\\{5\\}", "'" + comments[random.nextInt(comments.length - 1)] + "'");

                writer.println(row);
            }
        }
    }

    private static final String TAG_TEMPL
            = "insert into tag (id, name, post_count) values ({1}, {2}, {3});";

    private static final String[] TAGS = {
            "facebook-api", "reactjs", "javascript", "java", "spring", "jersey",
            "es6", "typescript", "scala", "spring-boot", "nodejs", "jax-rs",
            "bootstrap", "rxjs", "spring-security", "spring-mvc", "mysql",
            "rest", "spring-data", "javaee", "websocket", "jackson", "oracle",
            "google-maps", "angular", "react-router", "redux", "ionic",
            "rxjava", "android", "linux", "ios", "swift", "xamarin", "hadoop"
    };

    private static void printTag(Tuple tuple, PrintWriter writer) throws Exception {
        Map<String, Integer> postCounts = tuple.postCounts;
        String row;
        String tag;
        Integer count;
        for (int i = 0; i < TAGS.length; i++) {
            tag = TAGS[i];
            count = postCounts.get(tag);
            row = TAG_TEMPL
                    .replaceFirst("\\{1\\}", String.valueOf(i + 1))
                    .replaceFirst("\\{2\\}", "'" + tag + "'")
                    .replaceFirst("\\{3\\}", String.valueOf(count == null ? 0 : count));
            writer.println(row);
        }
    }

    private static final String POST_TAG_TMPL
            = "insert into post_tag (post_id, tag_id) values ({1}, {2});";

    private static Tuple getPostTag() {
        final int numOfTags = 3;
        final Random random = new Random();
        final Set<Integer> indexes = new HashSet<>();
        final Map<String, Integer> postCounts = new HashMap<>();
        final List<String[]> rows = new ArrayList<>();

        for (int i = 1; i <= USERS.length * POSTS_PER_USER; i++) {
            while (indexes.size() < numOfTags) {
                indexes.add(random.nextInt(TAGS.length - 1) + 1);
            }
            for (Iterator<Integer> it = indexes.iterator(); it.hasNext();) {
                String postId = String.valueOf(i);
                Integer tagId = it.next();
                String tag = TAGS[tagId];

                if (postCounts.containsKey(tag)) {
                    int count = postCounts.get(tag);
                    postCounts.put(tag, ++count);
                } else {
                    postCounts.put(tag, 0);
                }
                rows.add(new String[]{postId, String.valueOf(tagId)});
            }
            indexes.clear();
        }

        Tuple tuple = new Tuple();
        tuple.postCounts = postCounts;
        tuple.rows = rows;
        return tuple;
    }

    private static void printPostTag(Tuple tuple, PrintWriter writer) throws Exception {
        List<String[]> rows = tuple.rows;
        for (String[] row: rows) {
            writer.println(POST_TAG_TMPL
                    .replaceFirst("\\{1\\}", row[0])
                    .replaceFirst("\\{2\\}", row[1]));

        }
    }

    private static String getRandomDate() {
        return LocalDateTime.now()
                .minusDays(ThreadLocalRandom.current().nextInt(365))
                .minusHours(ThreadLocalRandom.current().nextInt(24))
                .minusMinutes(ThreadLocalRandom.current().nextInt(60))
                .minusSeconds(ThreadLocalRandom.current().nextInt(60))
                .toString().replace("T", " ");
    }

    private static final String CONTENT
            = "'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula et erat et malesuada. " +
            "Morbi vehicula, nunc at molestie vehicula, urna lacus volutpat massa, nec ultricies massa " +
            "sapien non massa. Phasellus cursus mattis ante, quis maximus ligula egestas et. Quisque a " +
            "consectetur nibh, id consequat enim. Etiam at dolor eu quam gravida porttitor. Maecenas eu " +
            "augue nec velit convallis pellentesque. Nam iaculis odio id massa fermentum laoreet. Etiam " +
            "sapien nisi, tempor id nulla in, mattis accumsan massa. Phasellus commodo purus faucibus augue " +
            "semper, sed gravida dolor eleifend. Suspendisse potenti. Aliquam ullamcorper eleifend massa, " +
            "eget vestibulum ex sodales ac. Cras semper mi ac velit feugiat, in laoreet risus rhoncus.'";


    private static class Tuple {
        Map<String, Integer> postCounts;
        List<String[]> rows;
    }
}

