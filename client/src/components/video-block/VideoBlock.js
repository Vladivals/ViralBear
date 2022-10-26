import React from "react";
import classNames from "classnames";
import { Grid, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { chunk } from "lodash";
import Link from "@material-ui/core/Link";

import { useStyles } from "./VideoBlock.Styles";
import ourVideo from "../../consts/ourVideo";

const VideoBlock = () => {
  const classes = useStyles();

  const { t } = useTranslation();
  const Video = chunk(ourVideo, 2);

  return (
    <Grid
      container
      className={classNames(
        classes.flex,
        classes.marginAuto,
        classes.videoBlockPage,
        classes.centeredContent
      )}
    >
      <Grid
        xs={10}
        container
        item
        className={classNames(
          classes.flex,
          classes.videoInner,
          classes.whiteText,
          classes.centeredContent
        )}
      >
        <Typography
          variant="h2"
          className={classNames(classes.heading, classes.centeredText)}
        >
          {t("someOfOurSuccessfulVideos")}
        </Typography>
        {Video.map((row, key) => (
          <Grid
            container
            item
            xs={12}
            key={key}
            className={classNames(
              classes.marginAuto,
              classes.centeredContent,
              classes.whiteText
            )}
          >
            {row.map((video, key) => (
              <Grid
                xs={12}
                lg={6}
                item
                key={key}
                className={classNames(classes.marginAuto, classes.paddedBlock)}
              >
                <Grid
                  container
                  item
                  xs={12}
                  className={classNames(
                    classes.marginAuto,
                    classes.centeredContent,
                    classes.whiteText,
                    classes.flex,
                    classes.darkedBackground
                  )}
                >
                  <video controls className={classes.video} src={video.src} />
                  <Grid
                    container
                    className={classNames(
                      classes.marginAuto,
                      classes.centeredContent,
                      classes.whiteText,
                      classes.infoVideo
                    )}
                  >
                    {video.links.map(({ company, link }) => (
                      <Typography variant="h5" noWrap>
                        <Link className={classes.whiteText} href={link}>
                          {company}
                        </Link>
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default VideoBlock;
